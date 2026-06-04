import BillsStatusCard from "../vimal/BillsStatusCard";

export default function BillsStatus({
  totalBills,
  pendingBills,
  paidBills,
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
      title: "Total Amount",
      value: totalAmount,
      color: "text-[#111827]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

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