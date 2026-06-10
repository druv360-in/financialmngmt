import React, { useState } from "react";
import { FiX } from "react-icons/fi";

export default function AddNewBillCategory() {
  // State
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const [categories, setCategories] = useState([]);

  // Add Category Function
  const handleAddCategory = () => {
    if (!categoryName || !description) {
      alert("Please fill all fields");
      return;
    }

    const newCategory = {
      id: Date.now(),
      categoryName,
      description,
    };

    setCategories([...categories, newCategory]);

    // Clear Inputs
    setCategoryName("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex items-center justify-center p-5">

      {/* Main Box */}
      <div className="bg-white w-full max-w-[600px] rounded-2xl p-6 shadow-2xl relative">

        {/* Close Button */}
        <button className="absolute top-5 right-5 text-gray-500 hover:text-black">
          <FiX size={18} />
        </button>

        {/* Heading */}
        <h2 className="text-[28px] font-bold text-[#111827]">
          Add New Bill Category
        </h2>

        {/* Form */}
        <div className="mt-6">

          {/* Category Name */}
          <div className="mb-5">

            <label className="text-[14px] font-semibold text-gray-700">
              Category Name *
            </label>

            <input
              type="text"
              placeholder="e.g., Utilities, Donations"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#3b5bdb]"
            />
          </div>

          {/* Description */}
          <div>

            <label className="text-[14px] font-semibold text-gray-700">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Brief description of this category..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-[#3b5bdb]"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 mt-8">

            <button
              onClick={() => {
                setCategoryName("");
                setDescription("");
              }}
              className="px-5 py-3 rounded-lg border border-gray-300 font-medium"
            >
              Cancel
            </button>

            <button
              onClick={handleAddCategory}
              className="bg-[#050816] hover:bg-[#111827] text-white px-6 py-3 rounded-lg font-medium"
            >
              Add Category
            </button>

          </div>
        </div>

        {/* Added Categories */}
        {categories.length > 0 && (
          <div className="mt-10">

            <h3 className="text-[22px] font-bold mb-5">
              Added Categories
            </h3>

            <div className="space-y-4">

              {categories.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-xl p-4"
                >
                  <h4 className="text-[18px] font-semibold text-[#111827]">
                    {item.categoryName}
                  </h4>

                  <p className="text-gray-500 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        )}
      </div>
    </div>
  );
}