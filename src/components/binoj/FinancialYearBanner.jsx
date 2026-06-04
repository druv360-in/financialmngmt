import { useNavigate } from "react-router-dom";

export default function FinancialYearBanner() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/settings")}
      className="w-full text-left rounded-2xl bg-linear-to-r from-blue-50 via-indigo-50 to-blue-50
        border border-blue-100 p-7 flex items-center gap-5
        transition-all duration-200 hover:shadow-md hover:border-blue-200 group cursor-pointer"
    >
      <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center transition-colors duration-200 group-hover:bg-blue-200 shrink-0">
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      <div>
        <p className="text-blue-800 font-bold text-lg group-hover:text-blue-900 transition-colors">
          Financial Year 2026-2027
        </p>
        <p className="text-blue-500 text-sm mt-0.7">
          From 1/1/2026 to 20/5/2026
        </p>
      </div>
    </button>
  );
}