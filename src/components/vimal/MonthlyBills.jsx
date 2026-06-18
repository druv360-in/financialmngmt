import { useState } from "react";

import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import BillCard from "../vimal/BillCard";

export default function MonthlyBills({
  month,
  bills,
  onEditBill,
  onDeleteBill,
}) {

  const [isOpen, setIsOpen] = useState(true);

  const totalAmount = bills.reduce(
    (sum, bill) =>
      sum +
      Number(
        bill.amount
          .replace("₹", "")
          .replace(/,/g, "")
      ),
    0
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

      {/* HEADER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full
          flex
          flex-col
          sm:flex-row
          sm:justify-between
          sm:items-center
          items-start
          gap-3
          px-4 sm:py-5
          py-5
          hover:bg-gray-50
          transition
          cursor-pointer
        "
      >

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* DROPDOWN ICON */}
          <div className="text-gray-500">

            {isOpen ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}

          </div>

          {/* MONTH */}
          <h2 className="text-[20px] font-semibold text-[#111827]">
            {month}
          </h2>

        </div>

        {/* RIGHT */}
        <p className="text-[14px] text-gray-400 text-left sm:text-right">
          {bills.length} bills • ₹{totalAmount}
        </p>

      </button>

      {/* BILL LIST */}
      {isOpen && (

        <div className="px-3 sm:px-5 pb-5 space-y-4">

          {bills.map((bill) => (

            <BillCard
              key={bill.id}
              title={bill.title}
              recordNumber={bill.recordNumber}
              recordType={bill.recordType}
              status={bill.status}
              vendor={bill.vendor}
              category={bill.category}
              dueDate={bill.dueDate}
              description={bill.description}
              amount={bill.amount}
              onEdit={() => onEditBill(bill)}
              onDelete={() =>
                onDeleteBill(
                  bill.recordNumber
                )
              }
            />

          ))}

        </div>

      )}

    </div>
  );
}