import { Pencil, Trash2 } from "lucide-react";

export default function BillCard({
  title,
  recordNumber,
  recordType,
  status,
  vendor,
  category,
  dueDate,
  description,
  amount,
}) {
  
  const handleEditButton = () => {
    alert(
      "Edit Bill functionality has not been implemented yet."
    );
  };
  const handleDeleteButton = () => {
    alert(
      "Delete Bill functionality has not been implemented yet."
    );
  };
  return (

    <div className="bg-white border border-gray-200 rounded-xl px-4 sm:px-6 py-5">

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

        {/* LEFT CONTENT */}
        <div className="flex-1 min-w-0">

          {/* TITLE + BADGES */}
          <div className="flex items-center gap-2 flex-wrap">

            <h3 className="text-[18px] sm:text-[20px] font-semibold text-gray-800 break-words">
              {title}
            </h3>

            {/* RECORD NUMBER */}
            <span
              className={`
                text-[11px]
                px-2 py-0.5
                rounded-md
                font-medium

                ${
                  recordType === "Voucher"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-blue-100 text-blue-700"
                }
              `}
            >
              {recordNumber}
            </span>

            {/* STATUS */}
            <span
              className={`
                text-[11px]
                px-2 py-0.5
                rounded-md
                capitalize

                ${
                  status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : status === "Overdue"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }
              `}
            >
              {status}
            </span>

          </div>

          {/* META DATA */}
          <div className="flex flex-wrap items-start gap-x-5 gap-y-3 mt-4">

            {/* TYPE */}
            <div>
              <p className="text-[12px] text-gray-400">
                Type:
              </p>

              <p className="text-[13px] text-gray-600">
                {recordType}
              </p>
            </div>

            <span className="hidden sm:block text-gray-300 mt-5 text-sm">
              •
            </span>

            {/* VENDOR */}
            <div>
              <p className="text-[12px] text-gray-400">
                Vendor:
              </p>

              <p className="text-[13px] text-gray-600 break-words">
                {vendor}
              </p>
            </div>

            <span className="hidden sm:block text-gray-300 mt-5 text-sm">
              •
            </span>

            {/* CATEGORY */}
            <div>
              <p className="text-[12px] text-gray-400">
                Category:
              </p>

              <p className="text-[13px] text-gray-600">
                {category}
              </p>
            </div>

            <span className="hidden sm:block text-gray-300 mt-5 text-sm">
              •
            </span>

            {/* DUE DATE */}
            <div>
              <p className="text-[12px] text-gray-400">
                Due:
              </p>

              <p className="text-[13px] text-gray-600">
                {dueDate}
              </p>
            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[13px] text-gray-400 break-words">
            {description}
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-between lg:justify-end gap-4 ">

          {/* AMOUNT */}
          <h2 className="text-[18px] sm:text-[20px] font-bold text-gray-800 whitespace-nowrap">
            {amount}
          </h2>
          
          {/* ACTION BUTTONS */}
          <div className="flex gap-2">

            {/* EDIT */}
            <button
              onClick={handleEditButton}
              className="
                w-10 h-10
                rounded-lg
                border border-gray-200
                flex items-center justify-center
                hover:bg-gray-50
                transition
                shrink-0
              "
            >
              <Pencil
                size={16}
                className="text-gray-600"
              />
            </button>

            {/* DELETE */}
            <button
              onClick={handleDeleteButton}
              className="
                w-10 h-10
                rounded-lg
                border border-gray-200
                flex items-center justify-center
                hover:bg-red-50
                transition
                shrink-0
              "
            >
              <Trash2
                size={16}
                className="text-red-500"
              />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}