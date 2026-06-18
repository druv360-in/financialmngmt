import BillsStatusCard from "./BillsStatusCard";

export default function BillsStatus({
  totalBills,
  pendingBills,
  paidBills,
  overdueBills,
  totalAmount,
}) {

  const stats = [
    {
      title: "Total Bills",
      value: totalBills,
      color: "text-[#111827]",
    },

    {
      title: "Pending",
      value: pendingBills,
      color: "text-[#D97706]",
    },

    {
      title: "Paid",
      value: paidBills,
      color: "text-[#16A34A]",
    },

    {
      title: "Overdue",
      value: overdueBills,
      color: "text-[#DC2626]",
    },

    {
      title: "Total Amount",
      value: totalAmount,
      color: "text-[#111827]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

      {stats.map((stat) => (
        <BillsStatusCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          color={stat.color}
        />
      ))}

    </div>
  );
}