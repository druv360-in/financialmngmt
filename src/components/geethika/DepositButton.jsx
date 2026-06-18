import { ArrowDownToLine, ArrowUpFromLine } from "lucide-react";

const DepositButton = ({ onDepositClick, onWithdrawClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

      {/* Deposit Button */}
      <button
        onClick={onDepositClick}
        className="bg-black text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 font-medium text-sm hover:bg-[#111827] transition"
      >
        <ArrowDownToLine size={18} />
        Deposit Cash to Bank
      </button>

      {/* Withdraw Button */}
      <button
        onClick={onWithdrawClick}
        className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center justify-center gap-2 font-medium text-sm hover:bg-gray-50 transition"
      >
        <ArrowUpFromLine size={18} />
        Withdraw from Bank
      </button>

    </div>
  );
};

export default DepositButton;