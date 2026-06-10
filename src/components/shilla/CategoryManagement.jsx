import React from 'react';
import { Plus } from 'lucide-react';
import { CategoryStatus } from './CategoryStatus';

export const CategoryManagement = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-[18px] sm:text-[20px] font-semibold text-[#111827]">
            Category Management
          </h1>

          <p className="text-[13px] text-gray-500 mt-1">
            Manage categories for bills and receipts
          </p>
        </div>

        <button
          className="
            h-[38px]
            px-4
            rounded-lg
            bg-[#020617]
            text-white
            flex
            items-center
            justify-center
            gap-2
            text-[13px]
            font-medium
            w-fit
          "
        >
          <Plus size={15} />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <CategoryStatus title="Bill Categories" count={5} />

        <CategoryStatus title="Receipt Categories" count={7} />
      </div>
    </div>
  );
};
