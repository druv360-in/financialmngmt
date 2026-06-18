import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

function TotalDisplayCard({
  title,
  value,
  sub,
  icon,
  to,
  borderColor,
  bgColor,
  textColor,
  subColor,
  iconBg,
}) {
  const navigate = useNavigate();

  const baseClasses = `rounded-2xl border ${borderColor} ${bgColor} p-5 flex flex-col gap-3 transition-all duration-200`;

  return (
    <button
      type="button"
      onClick={() => to && navigate(to)}
      className={`${baseClasses} text-left ${
        to ? "hover:shadow-md cursor-pointer hover:-translate-y-0.5" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-sm font-semibold ${textColor}`}>{title}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
      </div>

      <div>
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
        <p className={`text-xs mt-1 ${subColor}`}>{sub}</p>
      </div>
    </button>
  );
}

export default function TotalDisplayCards({
  totalCredit = "₹10000.00",
  totalDebit = "₹5000.00",
  netBalance = "₹5000.00",
  pendingBills = 9,
  receiptCount = 5,
  paidBillCount = 10,
  balanceLabel = "Surplus",
}) {
  const cards = [
    {
      title: "Total Credit (Income)",
      value: totalCredit,
      sub: `${receiptCount} receipt${receiptCount !== 1 ? "s" : ""} this year`,
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      subColor: "text-green-500",
      iconBg: "bg-green-100",
      icon: <Icon name="trendUp" size={16} className="text-green-600" />,
      to: "/receipts",
    },
    {
      title: "Total Debit (Expenses)",
      value: totalDebit,
      sub: `${paidBillCount} paid bill${paidBillCount !== 1 ? "s" : ""} this year`,
      borderColor: "border-red-200",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      subColor: "text-red-400",
      iconBg: "bg-red-100",
      icon: <Icon name="bills" size={16} className="text-red-500" />,
      to: "/bills",
    },
    {
      title: "Net Balance",
      value: netBalance,
      sub: balanceLabel,
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      subColor: "text-blue-500",
      iconBg: "bg-blue-100",
      icon: <Icon name="dollar" size={16} className="text-blue-600" />,
      to: "/ledger",
    },
    {
      title: "Pending Bills",
      value: String(pendingBills),
      sub: pendingBills === 0 ? "All up to date" : `${pendingBills} bill${pendingBills !== 1 ? "s" : ""} overdue`,
      borderColor: "border-orange-200",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      subColor: "text-orange-400",
      iconBg: "bg-orange-100",
      icon: <Icon name="clock" size={16} className="text-orange-500" />,
      to: "/unpaid-dues",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <TotalDisplayCard key={card.title} {...card} />
      ))}
    </div>
  );
}