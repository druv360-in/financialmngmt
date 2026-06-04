import IndividualDeposit from "./IndividualDeposit";

function RecentDeposits() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Recent Deposits to Bank
      </h2>

      <IndividualDeposit
        personName="Mary Smith"
        date="14/4/2026"
        depositType="Special offering deposit"
        amount="3000.00"
      />

      <IndividualDeposit
        personName="John Doe"
        date="10/04/2026"
        depositType="weekly offering deposit"
        amount="2500.00"
      />

    </div>
  );
}

export default RecentDeposits;