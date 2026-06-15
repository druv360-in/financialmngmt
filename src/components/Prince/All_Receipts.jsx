import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Monthly_Receipts from "./Monthly_Receipts";

function All_Receipts({  receipts,onAddReceipt , onEditReceipt, onDeleteReceipt})  {
 
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedPayer, setSelectedPayer] = useState("All Payers");

  // YEARS
  const years = [
    "All Years",
    ...new Set(
      receipts.map((receipt) =>
        new Date(receipt.date).getFullYear()
      )
    ),
  ];

  // PAYERS
  const payers = [
    "All Payers",
    ...new Set(
      receipts.map((receipt) => receipt.payer)
    ),
  ];

  // FILTERING
  const filteredReceipts = receipts.filter(
    (receipt) => {
      const receiptYear =
        new Date(receipt.date).getFullYear();

      const matchesYear =
        selectedYear === "All Years" ||
        receiptYear === Number(selectedYear);

      const matchesPayer =
        selectedPayer === "All Payers" ||
        receipt.payer === selectedPayer;

      const matchesSearch =
        receipt.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        receipt.payer
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        receipt.category
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        receipt.receiptNo
          .toLowerCase()
          .includes(search.toLowerCase());

      return (
        matchesYear &&
        matchesPayer &&
        matchesSearch
      );
    }
  );

  // GROUP BY MONTH
  const groupedReceipts = useMemo(() => {
    return filteredReceipts.reduce(
      (groups, receipt) => {
        const month = new Date(
          receipt.date
        ).toLocaleString("default", {
          month: "long",
          year: "numeric",
        });

        if (!groups[month]) {
          groups[month] = [];
        }

        groups[month].push(receipt);

        return groups;
      },
      {}
    );
  }, [filteredReceipts]);

  // SORT MONTHS DESC
  const sortedMonths = Object.entries(
    groupedReceipts
  ).sort(
    ([monthA], [monthB]) =>
      new Date(monthB) - new Date(monthA)
  );

  return (
    <div className="space-y-6">

      {/* FILTER CARD */}

      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-3">

        <h2 className=" font-semibold text-gray-800 mb-8">
          Filters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* YEAR */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Year
            </label>

            <select
              value={selectedYear}
              onChange={(e) =>
                setSelectedYear(e.target.value)
              }
              className="w-full bg-[#f5f5f5] border border-gray-200 rounded-xl px-4 py-3 outline-none"
            >
              {years.map((year) => (
                <option
                  key={year}
                  value={year}
                >
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* PAYER */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Payer / Family
            </label>

            <select
              value={selectedPayer}
              onChange={(e) =>
                setSelectedPayer(e.target.value)
              }
              className="w-full bg-[#f5f5f5] border border-gray-200 rounded-xl px-4 py-3 outline-none"
            >
              {payers.map((payer) => (
                <option
                  key={payer}
                  value={payer}
                >
                  {payer}
                </option>
              ))}
            </select>
          </div>

          {/* SEARCH */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>

            <div className="flex items-center gap-3 bg-[#f5f5f5] border border-gray-200 rounded-xl px-4 py-3">

              <Search className="w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="Search receipts..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="bg-transparent outline-none w-full text-sm"
              />

            </div>
          </div>

        </div>

        {/* CLEAR BUTTON */}

        <button
          onClick={() => {
            setSelectedYear("All Years");
            setSelectedPayer("All Payers");
            setSearch("");
          }}
          className="mt-5 px-5 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition"
        >
          Clear Filters
        </button>

      </div>

      {/* MONTH SECTIONS */}

      {sortedMonths.length > 0 ? (
  sortedMonths.map(([month, receipts]) => (
    <Monthly_Receipts
    key={month}
    month={month}
    receipts={receipts}
    onEditReceipt={onEditReceipt}
    onDeleteReceipt={onDeleteReceipt}  
  />
  ))
) : (
  <div className="bg-white border border-gray-200 rounded-3xl p-16 text-center">

    <h3 className=" font-medium text-gray-500">
      No receipts found
    </h3>

    <button
      onClick={onAddReceipt}
      className="mt-6 inline-flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 transition"
    >
      <span>+</span>
      Add your first receipt
    </button>

  </div>
)}

    </div>
  );
}

export default All_Receipts;