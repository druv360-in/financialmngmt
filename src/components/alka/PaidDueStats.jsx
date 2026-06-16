const PaidDueStats = ({ dues = [] }) => {
  // Total Amount
  const totalAmount = dues.reduce(
    (total, due) => total + Number(due.amount),
    0
  );

  // Total Payments
  const totalPayments = dues.length;

  return (
    <div
      className="
        border
        border-gray-100
        rounded-xl
        p-4
        bg-[#EEF4FF]
        flex
        flex-col
        md:flex-row
        gap-4
        md:items-center
        md:justify-between
      "
    >
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Dollar Icon */}
        <div
          className="
            w-16
            h-16
            rounded-full
            bg-blue-100
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <span
            className="
              text-[#2563EB]
              text-[42px]
              font-normal
              leading-none
            "
          >
            $
          </span>
        </div>

        {/* Amount */}
        <div className="min-w-0">
          <p className="text-gray-500 text-sm">
            Total Paid in 2026
          </p>

          <h1
            className="
              text-2xl
              md:text-3xl
              font-bold
              text-gray-800
              break-all
            "
          >
            ${totalAmount}
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:text-right border-t md:border-0 pt-3 md:pt-0">
        <p className="text-gray-500 text-sm">
          Total Payments
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {totalPayments}
        </h1>
      </div>
    </div>
  );
};

export default PaidDueStats;