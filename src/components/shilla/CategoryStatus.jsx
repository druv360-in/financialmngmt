import React from 'react';

export const CategoryStatus = ({ title, count }) => {
  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-[24px]
        px-7
        py-6
        min-h-[130px]
        flex
        flex-col
        justify-center
        shadow-[0_1px_2px_rgba(0,0,0,0.03)]
      "
    >
      <p className="text-[15px] text-gray-500 font-medium">{title}</p>

      <h2 className="text-[30px] font-bold text-[#0f172a] leading-none mt-3">
        {count}
      </h2>
    </div>
  );
};
