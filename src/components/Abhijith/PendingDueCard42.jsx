import { Pencil, Trash2 } from "lucide-react";

const PendingDueCard = ({
  due,
  onEdit,
  onPay,
  onDelete,
}) => {
  const statusColor =
    due.status === "paid"
      ? "bg-green-100 text-green-700"
      : due.status === "partial"
      ? "bg-yellow-200 text-yellow-800"
      : "bg-red-100 text-red-700";

  const cardColor =
    due.status === "paid"
      ? "bg-green-50 border border-green-200"
      : due.status === "partial"
      ? "bg-yellow-50 border border-yellow-200"
      : "bg-red-50 border border-red-200";

  return (
    <div className={`${cardColor} rounded-lg p-4`}>
      <div className="flex justify-between items-start">
        {/* Left Side */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-gray-800">
              {due.title}
            </h3>

            <span
              className={`${statusColor} text-xs px-2 py-1 rounded`}
            >
              {due.status}
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Category: {due.category}
          </p>
        </div>

        {/* Desktop Buttons */}

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onPay}
            className="
              px-4 py-2
              rounded-xl
              bg-green-50
              text-green-700
              border border-green-200
              font-medium text-sm
              hover:bg-green-100
              transition-all
            "
          >
            💲 Pay
          </button>

          <button
            onClick={onEdit}
            className="
              w-10 h-10
              rounded-xl
              flex items-center justify-center
              bg-white
              border border-gray-200
              text-gray-700
              hover:bg-blue-50
              hover:text-blue-600
              hover:border-blue-200
              transition-all
            "
          >
            <Pencil size={16} />
          </button>

          <button
            onClick={onDelete}
            className="
              w-10 h-10
              rounded-xl
              flex items-center justify-center
              bg-white
              border border-red-200
              text-red-500
              hover:bg-red-50
              transition-all
            "
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>Due Date: {due.dueDate}</p>

        <p>
          Total Amount: $
          {Number(due.totalAmount).toFixed(2)}
        </p>

        <p>
          Paid: $
          {Number(due.paid).toFixed(2)}
        </p>

        <p
          className={`font-semibold ${
            due.status === "paid"
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          Remaining: $
          {Number(due.remaining).toFixed(2)}
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        {due.description}
      </p>

      {/* Mobile Buttons */}
      
      <div className="md:hidden mt-4 border-t border-gray-200 pt-4">
        <div className="grid grid-cols-3 gap-2">
          
          <button
            onClick={onPay}
            className="
              flex flex-col items-center justify-center
              py-3
              rounded-xl
              bg-green-50
              border border-green-200
              text-green-700
              hover:bg-green-100
              transition-all
            "
          >
            <span className="text-lg">💲</span>
            <span className="text-xs font-medium mt-1">
              Pay
            </span>
          </button>

          <button
            onClick={onEdit}
            className="
              flex flex-col items-center justify-center
              py-3
              rounded-xl
              bg-blue-50
              border border-blue-200
              text-blue-700
              hover:bg-blue-100
              transition-all
            "
          >
            <Pencil size={18} />
            <span className="text-xs font-medium mt-1">
              Edit
            </span>
          </button>

          <button
            onClick={onDelete}
            className="
              flex flex-col items-center justify-center
              py-3
              rounded-xl
              bg-red-50
              border border-red-200
              text-red-600
              hover:bg-red-100
              transition-all
            "
          >
            <Trash2 size={18} />
            <span className="text-xs font-medium mt-1">
              Delete
            </span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default PendingDueCard;