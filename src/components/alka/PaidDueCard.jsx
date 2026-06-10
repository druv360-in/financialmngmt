import { FaEdit, FaTrash } from "react-icons/fa";

const PaidDueCard = ({
  title,
  amount,
  dueDate,
  onEdit,
  onDelete,
}) => {
  
  return (
    <div
      className="
        border
        border-gray-300
        rounded-lg
        p-4
        flex
        items-center
        justify-between
        bg-white
      "
    >

      {/* Left Side */}
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

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <h1 className="text-green-600 text-xl font-bold">
          ${amount}
        </h1>

        <div className="flex gap-2">

          <button
            onClick={onEdit}
            className="text-gray-500 hover:text-blue-500"
           >
            <FaEdit />
          </button>


          <button
          onClick={onDelete}
          className="text-gray-500 hover:text-red-500"
          >
            <FaTrash />
          </button>         

          

        </div>

      </div>

    </div>
  );
};

export default PaidDueCard;