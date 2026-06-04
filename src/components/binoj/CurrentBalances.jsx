import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

function BalanceItem({ label, value, highlighted, accent, icon, to }) {
  const navigate = useNavigate();

  const baseClass = `flex-1 rounded-xl p-4 transition-all duration-200 text-left
    ${
      highlighted
        ? `${accent.bg} border-l-4 ${accent.border} border-t-0 border-r-0 border-b-0`
        : "bg-white border border-gray-100"
    } ${to ? "hover:shadow-md cursor-pointer hover:scale-[1.01]" : ""}`;

  return (
    <button
      type="button"
      onClick={() => to && navigate(to)}
      className={baseClass}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon && <span>{icon}</span>}
        <span className={`text-sm font-medium ${highlighted ? accent.text : "text-gray-500"}`}>
          {label}
        </span>
      </div>

      <p className={`text-xl font-bold ${highlighted ? accent.textBold : "text-gray-700"}`}>
        {value}
      </p>
    </button>
  );
}

export default function CurrentBalances({
  openingCash = "₹0.00",
  cashInHand = "₹0.00",
  openingBank = "₹0.00",
  bankBalance = "₹0.00",
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">
        Current Balances
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <BalanceItem label="Opening Cash Balance" value={openingCash} highlighted accent={{ bg: "bg-gray-50", border: "border-gray-400", text: "text-gray-600", textBold: "text-gray-700" }} icon={<Icon name="bank" size={15} className="text-gray-500" />} to="/cash-bank" />
        <BalanceItem label="Cash in Hand" value={cashInHand} highlighted accent={{ bg: "bg-green-50", border: "border-green-400", text: "text-green-600", textBold: "text-green-700" }} icon={<Icon name="cash" size={15} className="text-green-500" />} to="/cash-bank" />
        <BalanceItem label="Opening Bank Balance" value={openingBank} highlighted accent={{ bg: "bg-gray-50", border: "border-gray-400", text: "text-gray-600", textBold: "text-gray-700" }} icon={<Icon name="bank" size={15} className="text-gray-500" />} to="/ledger" />
        <BalanceItem label="Bank Balance" value={bankBalance} highlighted accent={{ bg: "bg-blue-50", border: "border-blue-400", text: "text-blue-600", textBold: "text-blue-700" }} icon={<Icon name="bank" size={15} className="text-blue-500" />} to="/ledger" />
      </div>
    </div>
  );
}