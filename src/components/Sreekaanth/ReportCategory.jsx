import { useNavigate } from "react-router-dom";

const ReportCategory = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "category-wise",
      route: "/financial-reports/category-wise",
      icon: (
        <svg className="w-7 h-7 text-blue-500" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="8" y="14" width="2" height="4" rx="0.5" fill="currentColor"/>
          <rect x="11" y="12" width="2" height="6" rx="0.5" fill="currentColor"/>
          <rect x="14" y="15" width="2" height="3" rx="0.5" fill="currentColor"/>
        </svg>
      ),
      iconBg: "bg-blue-100",
      title: "Category-wise Reports",
      description: "View detailed bills & receipts by category",
    },
    {
      id: "debit-category-wise",
      route: "/financial-reports/debit-category-wise",
      icon: (
        <svg className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 17l2-2 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: "bg-orange-100",
      title: "Debit Category Wise Report",
      description: "View detailed debit transactions by category",
    },
    {
      id: "dues",
      route: "/financial-reports/dues",
      icon: (
        <svg className="w-7 h-7 text-green-500" viewBox="0 0 24 24" fill="none">
          <path d="M5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 8h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M5 12l2 2 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M5 18h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: "bg-green-100",
      title: "Dues Report",
      description: "Track who paid/unpaid by category",
    },
  ];

  return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => navigate(cat.route)}
          className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer"
        >
          <div className={`${cat.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0`}>
            {cat.icon}
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-gray-900">{cat.title}</h3>
            <p className="text-[13px] text-gray-500 mt-0.5">{cat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportCategory;