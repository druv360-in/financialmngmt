import TotalDeposits from "./TotalDeposits";

function DepositStatistics() {
  return (
    <div className="bg-white rounded-2xl  p-5">

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Deposit Statistics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <TotalDeposits
          title="Total Deposits"
          value="2"
        />

        <TotalDeposits
          title="Total Amount Deposited"
          value="5500.00"

        />

        <TotalDeposits
          title="Average Deposit"
          value="₹2750.00"
        />

      </div>

    </div>
  );
}

export default DepositStatistics;