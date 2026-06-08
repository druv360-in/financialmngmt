import { useState } from "react";
import FinancialReports from "../components/Sreekaanth/FinancialReports";
import ReportCategory from "../components/Sreekaanth/ReportCategory";
import ReportFilters from "../components/Sreekaanth/ReportFilters";
import CreditsDebits from "../components/Sreekaanth/CreditsDebits";
import { useNavigate } from "react-router-dom";

const FinancialReportsPage = () => {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    receiptCategory: "All Categories",
    billCategory: "All Categories",
    includeOpeningCash: true,
    includeOpeningBank: true,
  });

  const handleDownload = () => {
    console.log("Download triggered with filters:", filters);
    // wire up your actual download/export logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FinancialReports />
        <ReportCategory />
        <ReportFilters
          filters={filters}
          setFilters={setFilters}
          onFilterChange={setFilters}
          onDownload={handleDownload}
        />
        <CreditsDebits filters={filters} />
      </div>
    </div>
  );
};

export default FinancialReportsPage;