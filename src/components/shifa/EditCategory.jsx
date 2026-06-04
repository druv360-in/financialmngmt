import React, { useState } from "react";
import { FiX } from "react-icons/fi";

export default function EditCategory() {
  // State
  const [categoryName, setCategoryName] =
    useState("Utilities");

  const [description, setDescription] =
    useState("Water, electricity, gas");

  // Update Function
  const handleUpdateCategory = () => {
    if (!categoryName || !description) {
      alert("Please fill all fields");
      return;
    }

    alert("Category Updated Successfully");
  };

  // Cancel Function
  const handleCancel = () => {
    setCategoryName("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-[#f4f4f5] flex items-center justify-center p-5">

      {/* Modal */}
      <div className="bg-white w-full max-w-[520px] rounded-2xl shadow-2xl p-6 relative">

        {/* Close Button */}
        <button className="absolute top-5 right-5 text-gray-500 hover:text-black transition">
          <FiX size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-[32px] font-bold text-[#111827]">
          Edit Category
        </h2>

        {/* Form */}
        <div className="mt-6">

          {/* Category Name */}
          <div className="mb-5">

            <label className="text-[15px] font-semibold text-[#111827]">
              Category Name *
            </label>

            <input
              type="text"
              value={categoryName}
              onChange={(e) =>
                setCategoryName(e.target.value)
              }
              className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#3b5bdb]"
            />
          </div>

          {/* Description */}
          <div>

            <label className="text-[15px] font-semibold text-[#111827]">
              Description
            </label>

            <textarea
              rows="4"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#3b5bdb]"
            ></textarea>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-8">

            {/* Update Button */}
            <button
              onClick={handleUpdateCategory}
              className="flex-1 bg-[#020617] hover:bg-[#111827] text-white font-semibold py-3 rounded-xl transition"
            >
              Update Category
            </button>

            {/* Cancel Button */}
            <button
              onClick={handleCancel}
              className="px-6 py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition"
            >
              Cancel
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}