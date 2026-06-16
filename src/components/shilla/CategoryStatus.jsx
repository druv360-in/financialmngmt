import React from 'react';

export const CategoryStatus = ({ title, count }) => {
  return (
    <div
      className="
        bg-white
        border
        border-[#e2e8f0]
        rounded-[18px]
        pl-5
        pr-6
        pt-6
        pb-5
        min-h-[105px]
        flex
        flex-col
        justify-between
        w-full
      "
    >
      <p className="text-[14px]  text-[#60656b]  tracking-wide">{title}</p>

      <h2 className="text-[24px] font-bold text-[#0f172a] leading-none mt-3">
        {count}
      </h2>
    </div>
  );
};
