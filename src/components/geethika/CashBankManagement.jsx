import BalanceStats from "./BalanceStats";

const CashBankManagement = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <div className="mb-5">
        <h1 className="text-xl font-bold flex items-center gap-2">
          Cash & Bank Management
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Track cash deposits and balance management
        </p>
      </div>

      <BalanceStats />
    </div>
  );
};

export default CashBankManagement;