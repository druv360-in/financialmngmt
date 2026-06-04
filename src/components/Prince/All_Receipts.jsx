// components/All_Receipts.jsx

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import Monthly_Receipts from "./Monthly_Receipts";

function All_Receipts() {

  // RECEIPTS DATA
  const receipts = [
    {
      title: "Sunday Offering",
      receiptNo: "RCP1000",
      paymentMethod: "Cash",
      payer: "Congregation",
      category: "Tithes & Offerings",
      date: "2026-04-13",
      amount: 2500,
      description:
        "Weekly Sunday offering collection",
    },

    {
      title: "Building Fund Donation",
      receiptNo: "RCP1001",
      paymentMethod: "Check",
      payer: "John Smith",
      category: "Special Offerings",
      date: "2026-04-14",
      amount: 1000,
      description:
        "Special donation for building renovation",
    },

    {
      title: "Monthly Collection",
      receiptNo: "RCP1002",
      paymentMethod: "Cash",
      payer: "John Smith",
      category: "Monthly Collection",
      date: "2026-04-15",
      amount: 750,
      description:
        "Regular monthly church collection",
    },

    {
      title: "Mission Support",
      receiptNo: "RCP1003",
      paymentMethod: "UPI",
      payer: "David",
      category: "Mission",
      date: "2026-05-11",
      amount: 2000,
      description:
        "Mission ministry support",
    },

    {
      title: "Youth Ministry",
      receiptNo: "RCP1004",
      paymentMethod: "Card",
      payer: "Samuel",
      category: "Youth",
      date: "2025-12-20",
      amount: 3200,
      description:
        "Youth event sponsorship",
    },
  ];

  // SEARCH STATE
  const [search, setSearch] = useState("");

  // MONTH STATE
  const [selectedMonth, setSelectedMonth] = useState("April 2026");

  // ALL MONTHS
  const months = useMemo(() => {

    const uniqueMonths = [
      ...new Set(
        receipts.map((receipt) => {

          return new Date(
            receipt.date
          ).toLocaleString(
            "default",
            {
              month: "long",
              year: "numeric",
            }
          );

        })
      ),
    ];

    return uniqueMonths;

  }, []);

  // FILTER RECEIPTS
  const filteredReceipts =
    receipts.filter((receipt) => {

      // MONTH FILTER
      const receiptMonth =
        new Date(
          receipt.date
        ).toLocaleString(
          "default",
          {
            month: "long",
            year: "numeric",
          }
        );

      const matchesMonth = receiptMonth === selectedMonth;

      // SEARCH FILTER
      const matchesSearch =  receipt.title.toLowerCase().includes(search.toLowerCase())

        || receipt.payer.toLowerCase().includes(search.toLowerCase())

        || receipt.category.toLowerCase().includes(search.toLowerCase())

        || receipt.receiptNo.toLowerCase().includes(search.toLowerCase());

      return (
        matchesMonth &&
        matchesSearch
      );

    });

  return (

    <div className="space-y-6">

      {/* SEARCH CARD */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">

        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="flex items-center gap-3 border border-gray-200 bg-[#fafafa] rounded-2xl px-4 py-4 flex-1">

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

      {/* MONTHLY RECEIPTS */}
      <Monthly_Receipts
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        months={months}
        receipts={filteredReceipts}
      />

    </div>

  );
}

export default All_Receipts;