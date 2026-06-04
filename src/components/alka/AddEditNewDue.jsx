import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const AddEditNewDue = ({
  isOpen,
  setIsOpen,
  addDue,
  editDue,
}) => {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [year, setYear] = useState("2026");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // Edit Data Fill
  useEffect(() => {

    if (editDue) {

      setTitle(editDue.title || "");
      setAmount(editDue.amount || "");
      setDueDate(editDue.dueDate || "");

      setYear(
        new Date(editDue.dueDate)
          .getFullYear()
          .toString()
      );

    }

  }, [editDue]);

  // Close Modal
  const closeModal = () => {
    
    const confirmCancel = window.confirm(
      "Do you want to cancel?"
    );
    if (!confirmCancel) return;
    setIsOpen(false);
  };

  // Submit
  const handleAddDue = (e) => {

    e.preventDefault();

    if (!title || !amount || !dueDate) {

      alert("Please fill mandatory fields");

      return;

    }

    const newDue = {
      title,
      amount,
      dueDate,
      year,
      category,
      description,
    };

      // Show confirmation only while editing
      if (editDue) {
        const confirmUpdate = window.confirm(
          "Are you sure you want to update this due?"
        );
        if (!confirmUpdate) return;
      }


    addDue(newDue);

    // Reset Fields
    setTitle("");
    setAmount("");
    setDueDate("");
    setCategory("");
    setDescription("");

    setIsOpen(false);

  };

  

  // Hide Modal
  if (!isOpen) return null;

  return (

    <div
      className="
        fixed
        inset-0
        bg-black/40
        flex
        items-center
        justify-center
        z-50
      "
    >

      {/* Modal */}
      <div
        className="
          bg-white
          rounded-2xl
          shadow-xl
          w-full
          max-w-[540px]
          p-6
          max-h-[100vh]
        "
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-5">

          <h1 className="text-[20px] font-semibold text-black">

            {editDue ? "Edit Due" : "Add New Due"}

          </h1>

          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-black"
          >
            <IoClose size={24} />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleAddDue}
          className="space-y"
        >

          {/* Title */}
          <div>

            <label className="text-sm font-medium text-black">

              Title <span className="text-red-500">*</span>

            </label>

            <input
              type="text"
              placeholder="e.g., Annual Church Fund"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full
                mt-2
                bg-gray-100
                border
                border-gray-200
                rounded-xl
                px-4
                py-2.5
                text-base
                outline-none
                focus:border-black
              "
            />

          </div>

          {/* Amount */}
          <div>

            <label className="text-sm font-medium text-black">

              Amount <span className="text-red-500">*</span>

            </label>

            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="
                w-full
                mt-2
                bg-gray-100
                border
                border-gray-200
                rounded-xl
                px-4
                py-2.5
                text-base
                outline-none
              "
            />

          </div>

          {/* Due Date */}
          <div>

            <label className="text-sm font-medium text-black">

              Due Date <span className="text-red-500">*</span>

            </label>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="
                w-full
                mt-2
                bg-gray-100
                border
                border-gray-200
                rounded-xl
                px-4
                py-2.5
                text-base
                outline-none
              "
            />

          </div>

          {/* Year */}
          <div>

            <label className="text-sm font-medium text-black">

              Year <span className="text-red-500">*</span>

            </label>

            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="
                w-full
                mt-2
                bg-gray-100
                border
                border-gray-200
                rounded-xl
                px-4
                py-2.5
                text-base
                outline-none
              "
            />

          </div>

          {/* Category */}
          <div>

            <label className="text-sm font-medium text-black">

              Category <span className="text-red-500">*</span>

            </label>

            <div className="relative">

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full
                  mt-2
                  bg-gray-100
                  border
                  border-gray-200
                  rounded-xl
                  px-4
                  py-2.5
                  text-base
                  appearance-none
                  outline-none
                "
              >

                <option value="">
                  Select category
                </option>

                <option value="Church Fund">
                  Church Fund
                </option>

                <option value="Building Fund">
                  Building Fund
                </option>

                <option value="Mission Fund">
                  Mission Fund
                </option>

                <option value="Annual Dues">
                  Annual Dues
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

              <FaChevronDown
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

            </div>

          </div>

          {/* Description */}
          <div>

            <label className="text-sm font-medium text-black">

              Description

            </label>

            <textarea
              placeholder="Additional notes..."
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              rows={2}
              className="
                w-full
                mt-2
                bg-gray-100
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                text-base
                outline-none
                resize-none
              "
            />

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 pt-1">

            {/* Submit */}
            <button
              type="submit"
              className="
                flex-1
                bg-black
                text-white
                py-2.5
                rounded-xl
                text-base
                font-medium
                hover:bg-gray-900
              "
            >

              {editDue ? "Update Due" : "Add Due"}

            </button>

            {/* Cancel */}
            <button
              type="button"
              onClick={closeModal}
              className="
                px-6
                py-3
                border
                border-gray-300
                rounded-xl
                text-base
                hover:bg-gray-100
              "
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>

  );
};

export default AddEditNewDue;