import { Maximize } from "lucide-react";
import BillsAndReceiptsCard from "../vimal/BillsAndReceiptsCard";
import { useNavigate } from "react-router-dom";

export default function RecentBills({
  title,
  bills,
  variant,
  maxItems = 3,
  viewAllPath,
}) {

  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">

        {/* TITLE */}
        <h2 className="text-[20px] font-semibold text-[#111827]">
          {title}
        </h2>

        {/* VIEW ALL */}
        <button
          onClick={() => navigate(viewAllPath)} 
          className="
            text-[13px]
            font-medium
            text-blue-500
            hover:text-blue-600
            transition
            cursor-pointer
          "
        >
          View all
        </button>

      </div>

      {/* CARD LIST */}
      <div className="space-y-3">

        {bills.slice(0,maxItems).map((bill) => (
          <BillsAndReceiptsCard
            key={bill.id}
            title={bill.title}
            subtitle={bill.subtitle}
            amount={bill.amount}
            status={bill.status}
            date={bill.date}
            variant={variant}
          />
        ))}

      </div>

    </div>
  );
}