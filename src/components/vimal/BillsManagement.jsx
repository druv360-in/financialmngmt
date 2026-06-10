import BillsStatus from "../vimal/BillsStatus";

export default function BillsManagementPage({
  bills,
}) {

  const totalBills = bills.length;

  const pendingBills = bills.filter(
    (bill) => bill.status === "Pending"
  ).length;

  const paidBills = bills.filter(
    (bill) => bill.status === "Paid"
  ).length;

  const totalAmount = bills.reduce(
    (sum, bill) =>
      sum + Number(
        bill.amount
        .replace("₹", "")
        .replace(/,/g,"")
      ),
    0
  );

  /* ---------------- ADD BILL ---------------- */

  const handleAddBill = () => {
    alert(
      "Add Bill functionality has not been implemented yet."
    );
  };

  return (
    <div className="space-y-7">

      {/* TOP SECTION */}
      <div className="flex flex-col sm:flex-row sm:justify-between  sm:items-start gap-5">

        {/* LEFT */}
        <div>

          {/* TITLE */}
          <h1 className="text-[42px] leading-none font-bold text-[#111827]">
            Bills Management
          </h1>

          {/* SUBTITLE */}
          <p className="text-[16px] text-gray-500 mt-3">
            Track and manage church expenses
          </p>

        </div>

        {/* ADD BILL BUTTON */}
        <button
          onClick={handleAddBill}
          className="
            bg-[#030712]
            text-white
            px-6 py-3
            rounded-xl
            text-[15px]
            font-medium
            hover:bg-gray-900
            transition
            shadow-sm
          "
        >
          + Add Bill
        </button>

      </div>

      {/* STATUS CARDS */}
      <BillsStatus
        totalBills={totalBills}
        pendingBills={pendingBills}
        paidBills={paidBills}
        totalAmount={`₹${totalAmount}`}
      />

    </div>
  );
}