import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { HiOutlineTag } from "react-icons/hi";

const categories = [
  {
    id: 1,
    title: "Utilities",
    description: "Water, electricity, gas",
  },
  {
    id: 2,
    title: "Maintenance",
    description: "Building repairs and upkeep",
  },
  {
    id: 3,
    title: "Salaries",
    description: "Staff salaries and wages",
  },
  {
    id: 4,
    title: "Supplies",
    description: "Office and church supplies",
  },
  {
    id: 5,
    title: "Other",
    description: "Miscellaneous expenses",
  },
];

export default function BillCategories() {

  // Edit Function
  const handleEdit = (item) => {

    alert(
      `Edit Category\n\nCategory: ${item.title}\nDescription: ${item.description}`
    );

  };

  // Delete Function
  const handleDelete = (item) => {

    alert(
      `${item.title} Deleted Successfully`
    );

  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">

      {/* Top Tabs */}
      <div className="bg-[#e5e7eb] rounded-full flex overflow-hidden h-12">

        <button className="flex-1 bg-white rounded-full text-[16px] font-semibold text-black shadow-sm">
          Bill Categories
        </button>

        <button className="flex-1 text-[16px] font-medium text-black">
          Receipt Categories
        </button>

      </div>

      {/* Main Card */}
      <div className="mt-8 bg-white border border-gray-200 rounded-3xl p-6">

        {/* Heading */}
        <h2 className="text-[28px] font-semibold text-[#111827] mb-8">
          Bill Categories
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {categories.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-2xl bg-white p-5 flex items-start justify-between"
            >

              {/* Left Side */}
              <div className="flex items-start gap-4">

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#dbeafe] flex items-center justify-center">
                  <HiOutlineTag className="text-[#2563eb] text-[22px]" />
                </div>

                {/* Text */}
                <div>

                  <h3 className="text-[20px] font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>

                  <p className="text-[15px] text-gray-500 mt-1">
                    {item.description}
                  </p>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">

                {/* Edit */}
                <button
                  onClick={() => handleEdit(item)}
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                >
                  <FiEdit2 className="text-[18px] text-black" />
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(item)}
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-red-50 transition"
                >
                  <FiTrash2 className="text-[18px] text-red-500" />
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}