export default function BillsAndReceiptsCard({
  title,
  subtitle,
  amount,
  status,
  date,
  variant = "bill",
}) {
  const badgeStyles = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Overdue: "bg-red-100 text-red-700",

    Cash: "bg-blue-100 text-blue-700",
    Check: "bg-blue-100 text-blue-700",
    "Bank Transfer": "bg-blue-100 text-blue-700",
    "Credit Card": "bg-blue-100 text-blue-700",
    Online: "bg-blue-100 text-blue-700",
    Other: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="bg-[#F9FAFB] rounded-xl px-4 py-4">

      <div className="flex justify-between items-start gap-4">

        {/* LEFT SIDE */}
        <div className="flex-1 min-w-0">

          {/* TITLE */}
          <h3 className="text-[18px] font-semibold text-[#111827] leading-none">
            {title}
          </h3>

          {/* SUBTITLE */}
          <p className="text-[14px] text-gray-400 mt-2">
            {subtitle}
          </p>

          {/* BADGE + DATE */}
          <div className="flex items-center flex-wrap gap-3 mt-3">

            <span
              className={`
                text-[11px]
                px-2 py-1
                rounded-md
                font-medium
                ${badgeStyles[status]}
              `}
            >
              {status}
            </span>

            <p className="text-[12px] text-gray-400">
              Due: {date}
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center h-full">

          <h2
            className={`
              text-[20px]
              font-bold
              whitespace-nowrap

              ${
                variant === "receipt"
                  ? "text-green-600"
                  : "text-[#111827]"
              }
            `}
          >
            {amount}
          </h2>

        </div>

      </div>

    </div>
  );
}