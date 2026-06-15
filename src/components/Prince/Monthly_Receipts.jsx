import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Receipt_Card from "./Receipt_Card";

function Monthly_Receipts({ month, receipts, onEditReceipt,onDeleteReceipt  }) {
  const [open, setOpen] = useState(true);

  const totalAmount = receipts.reduce(
    (sum, receipt) => sum + receipt.amount,
    0
  );

  return (
    <div className="bg-[#fafafa] border border-gray-200 rounded-3xl p-4 sm:p-6 shadow-sm">
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
         <h2 className="text-base sm:text-lg lg:text-xl text-gray-800">
            {month}
          </h2>
        </div>

        <div className="flex items-center gap-3">
         <div className="text-left sm:text-right">
           <h2 className="text-xs sm:text-sm text-gray-500">
              {receipts.length} receipts • ₹
              {totalAmount.toFixed(2)}
            </h2>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 transition-all"
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
        className={`overflow-hidden transition-all duration-300 ${
          open ? "mt-6" : "h-0"
        }`}
      >
        {open && (
          <Receipt_Card receipts={receipts} onEditReceipt={onEditReceipt} onDeleteReceipt={onDeleteReceipt}   />
        )}
      </div>
    </div>
  );
}

export default Monthly_Receipts;