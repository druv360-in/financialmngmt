import React, { useCallback } from "react";

const ReportFilters = ({ onFilterChange, filters, setFilters, onDownload }) => {
  const receiptCategories = [
    "All Categories", "Tithes & Offerings", "Special Offerings",
    "Building Fund", "Mission Fund", "Monthly Collection", "Donations", "Other"
  ];
  const billCategories = [
    "All Categories", "Utilities", "Maintenance", "Salaries", "Supplies", "Other"
  ];

  const handleChange = useCallback((field, value) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);
    onFilterChange?.(updated);
  }, [filters, setFilters, onFilterChange]);

  const handleClear = useCallback(() => {
    const cleared = {
      fromDate: "",
      toDate: "",
      receiptCategory: "All Categories",
      billCategory: "All Categories",
      includeOpeningCash: true,
      includeOpeningBank: true,
    };
    setFilters(cleared);
    onFilterChange?.(cleared);
  }, [setFilters, onFilterChange]);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5">

      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
        </svg>
        <span className="text-[15px] font-semibold text-gray-900 tracking-normal">Report Filters</span>
      </div>

      {/* Row 1: From Date | To Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-gray-900">From Date</label>
          <input
            type="date"
            value={filters.fromDate}
            onChange={(e) => handleChange("fromDate", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-[9px] text-[13px] text-gray-900 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-gray-900">To Date</label>
          <input
            type="date"
            value={filters.toDate}
            onChange={(e) => handleChange("toDate", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-[9px] text-[13px] text-gray-900 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
      </div>

      {/* Row 2: Receipt Category | Bill Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-gray-900">Receipt Category Filter</label>
          <div className="relative">
            <select
              value={filters.receiptCategory}
              onChange={(e) => handleChange("receiptCategory", e.target.value)}
              className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-[9px] text-[13px] font-semibold text-gray-900 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 pr-8"
            >
              {receiptCategories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[13px] font-semibold text-gray-900">Bill Category Filter</label>
          <div className="relative">
            <select
              value={filters.billCategory}
              onChange={(e) => handleChange("billCategory", e.target.value)}
              className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-[9px] text-[13px] font-semibold text-gray-900 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 pr-8"
            >
              {billCategories.map((c) => <option key={c}>{c}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Checkboxes */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-6">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.includeOpeningCash}
            onChange={(e) => handleChange("includeOpeningCash", e.target.checked)}
            className="w-[15px] h-[15px] rounded accent-gray-900 cursor-pointer"
          />
          <span className="text-[13px] font-semibold text-gray-900">
            Include Opening Cash Balance (₹0.00)
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={filters.includeOpeningBank}
            onChange={(e) => handleChange("includeOpeningBank", e.target.checked)}
            className="w-[15px] h-[15px] rounded accent-gray-900 cursor-pointer"
          />
          <span className="text-[13px] font-semibold text-gray-900">
            Include Opening Bank Balance (₹0.00)
          </span>
        </label>
      </div>

      {/* Row 4: Clear Filters + Download Reports */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleClear}
          className="border border-gray-300 bg-white text-[13px] font-semibold text-gray-900 px-5 py-[7px] rounded-lg hover:bg-gray-50 transition-colors"
        >
          Clear Filters
        </button>
        <button
          onClick={() => onDownload?.()}
          className="inline-flex items-center gap-2 border border-gray-500 bg-gray-500 text-[13px] font-semibold text-white px-5 py-[7px] rounded-lg hover:bg-gray-600 hover:border-gray-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download Reports
        </button>
      </div>

    </div>
  );
};

export default ReportFilters;