import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Receipt_Card from "./Receipt_Card";

function Monthly_Receipts() {
  const [open, setOpen] = useState(false);

  const selectedMonth = "April 2026";

  const receipts = [
    {
      title: "Sunday Offering",
      receiptNo: "RCP1000",
      paymentMethod: "Cash",
      payer: "Congregation",
      category: "Tithes & Offerings",
      date: "2026-04-13",
      amount: 2500,
      description: "Weekly Sunday offering collection",
    },

    {
      title: "Building Fund Donation",
      receiptNo: "RCP1001",
      paymentMethod: "Check",
      payer: "John Smith",
      category: "Special Offerings",
      date: "2026-04-14",
      amount: 1000,
      description: "Special donation for building renovation",
    },
  ];

  const totalAmount = receipts.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <div className="bg-[#fafafa] border border-gray-200 rounded-3xl p-6 shadow-sm">

      <div className="flex items-start justify-between gap-4">

        <div>
          <h2 className="text-[26px] font-bold text-gray-800">
            {selectedMonth}
          </h2>
        </div>

        <div className="flex items-center gap-3">

          <div className="text-right">
            <h2 className="text-sm text-gray-500">
              {receipts.length} receipts • ₹
              {totalAmount.toFixed(2)}
            </h2>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="w-12 h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
          >
            {open ? (
              <ChevronUp className="w-5 h-5 text-gray-700" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-700" />
            )}
          </button>

        </div>

      </div>

      <div
        className={`
          origin-top
          transition-all
          duration-300
          overflow-hidden
          ${
            open
              ? "scale-y-100 opacity-100 h-auto mt-6"
              : "scale-y-95 opacity-0 h-0"
          }
        `}
      >
        <Receipt_Card receipts={receipts} />
      </div>

    </div>
  );
}

export default Monthly_Receipts;