
import { Pencil, Trash2 } from "lucide-react";

const PendingDueCard = ({ due }) => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-800">{due.title}</h3>

            <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">
              {due.status}
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Category: {due.category}
          </p>
        </div>

        <div className="flex gap-2">
          <button className="p-2 rounded bg-white border hover:bg-gray-100">
            $ Pay
          </button>

          <button className="p-2 rounded bg-white border hover:bg-gray-100">
            <Pencil size={16} />
          </button>

          <button className="p-2 rounded bg-white border hover:bg-red-100 text-red-500">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 space-y-1">
        <p>Due Date: {due.dueDate}</p>
        <p>Total Amount: ${due.totalAmount.toFixed(2)}</p>
        <p>Paid: ${due.paid.toFixed(2)}</p>

        <p className="text-red-500 font-semibold">
          Remaining: ${due.remaining.toFixed(2)}
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-3">{due.description}</p>
    </div>
  );
};

export default PendingDueCard;