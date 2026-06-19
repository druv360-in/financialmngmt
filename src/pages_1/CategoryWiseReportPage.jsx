import { useNavigate } from "react-router-dom";

const EmptyState = ({ message }) => (
  <div className="bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center py-16 px-4 mb-8">
    <svg className="w-14 h-14 text-gray-300 mb-3" viewBox="0 0 64 64" fill="none">
      <rect x="10" y="4" width="36" height="46" rx="4" fill="#e5e7eb" />
      <rect x="10" y="4" width="36" height="46" rx="4" stroke="#d1d5db" strokeWidth="1.5" />
      <path d="M34 4 L46 16 L34 16 Z" fill="#d1d5db" />
      <rect x="18" y="30" width="5" height="12" rx="1" fill="#9ca3af" />
      <rect x="25" y="25" width="5" height="17" rx="1" fill="#9ca3af" />
      <rect x="32" y="33" width="5" height="9" rx="1" fill="#9ca3af" />
    </svg>
    <p className="text-gray-400 text-sm">{message}</p>
  </div>
);

const CategoryWiseReportPage = () => {
  const navigate = useNavigate();
  const now = new Date();
  const year = now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate("/financial-reports")}
          className="inline-flex items-center gap-2 mb-6 px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          ← Back to Financial Reports
        </button>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Category-wise Annual Reports</h1>
          <p className="text-gray-400 text-sm mt-1">Financial Year {year}-{year + 1}</p>
        </div>
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-800 mb-3">Receipts (Income) by Category</h2>
          <EmptyState message="No receipts found for this financial year" />
        </div>
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-800 mb-3">Bills (Expenses) by Category</h2>
          <EmptyState message="No bills found for this financial year" />
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseReportPage;