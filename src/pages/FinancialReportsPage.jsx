import { useState } from "react";
import FinancialReports from "../components/Sreekaanth/FinancialReports";
import ReportCategory from "../components/Sreekaanth/ReportCategory";
import ReportFilters from "../components/Sreekaanth/ReportFilters";
import CreditsDebits from "../components/Sreekaanth/CreditsDebits";
import SideMenu from "../components/binoj/Sidemenu";
import MonthlyCard from "../components/anfas/MonthlyCard";

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
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-64 lg:min-h-screen flex-shrink-0">
        <SideMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <FinancialReports />

        <div className="mt-4 sm:mt-6">
          <ReportCategory />
        </div>

        <div className="mt-4 sm:mt-6">
          <ReportFilters
            filters={filters}
            setFilters={setFilters}
            onFilterChange={setFilters}
            onDownload={handleDownload}
          />
        </div>

        <div className="mt-4 sm:mt-6">
          <CreditsDebits filters={filters} />
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8">
          <MonthlyCard />
        </div>
      </div>
    </div>
  );
};

export default FinancialReportsPage;