import { FaEdit, FaTrash } from "react-icons/fa";

const PaidDueCard = ({
  title,
  amount,
  dueDate,
  onEdit,
  onDelete,
}) => {
  return (
    <>
      {/* Desktop View */}
      <div
        className="
          hidden md:flex
          border border-gray-300
          rounded-lg
          p-4
          items-center
          justify-between
          bg-white
        "
      >
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-gray-800">
              {title}
            </h1>

            <span
              className="
                bg-blue-100
                text-blue-600
                text-xs
                px-2
                py-1
                rounded
              "
            >
              Check
            </span>
          </div>

          <div className="flex gap-3 mt-2 text-sm text-gray-500">
            <p>Date: {dueDate}</p>
            <p>Monthly tithe</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <h1 className="text-green-600 text-xl font-bold">
            ${amount}
          </h1>

          <div className="flex gap-2">
            <button
              onClick={onEdit}
              className="
                w-10 h-10
                rounded-lg
                border
                border-blue-200
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
                hover:bg-blue-100
                transition
              "
            >
              <FaEdit />
            </button>

            <button
              onClick={onDelete}
              className="
                w-10 h-10
                rounded-lg
                border
                border-red-200
                bg-red-50
                text-red-600
                flex
                items-center
                justify-center
                hover:bg-red-100
                transition
              "
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className="
          md:hidden
          border
          border-gray-200
          rounded-xl
          p-4
          bg-white
          shadow-sm
        "
      >
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-gray-800 text-lg">
            {title}
          </h1>

          <span
            className="
              bg-blue-100
              text-blue-600
              text-xs
              px-2
              py-1
              rounded
            "
          >
            Check
          </span>
        </div>

        <div className="mt-3 text-gray-500 text-sm space-y-1">
          <p>Date: {dueDate}</p>
          <p>Monthly tithe</p>
        </div>

        <div className="mt-4">
          <p className="text-xs text-gray-500">
            Amount Paid
          </p>

          <h1 className="text-3xl font-bold text-green-600 mt-1">
            ${amount}
          </h1>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex gap-3">
            <button
              onClick={onEdit}
              className="
                flex-1
                flex
                flex-col
                items-center
                justify-center
                py-3
                rounded-xl
                bg-blue-50
                border
                border-blue-200
                text-blue-600
                font-medium
                hover:bg-blue-100
                transition
              "
            >
              <FaEdit className="text-sm mb-1" />
              Edit
            </button>

            <button
              onClick={onDelete}
              className="
                flex-1
                flex
                flex-col
                items-center
                justify-center
                py-3
                rounded-xl
                bg-red-50
                border
                border-red-200
                text-red-600
                font-medium
                hover:bg-red-100
                transition
              "
            >
              <FaTrash className="text-sm mb-1" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaidDueCard;