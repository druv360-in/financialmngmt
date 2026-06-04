
import TotalPendingCard from "./TotalPendingCard41";
import PendingDueCard from "./PendingDueCard42";

const pendingDues = [
  {
    id: 1,
    title: "Annual Church Fund",
    status: "partial",
    category: "Church Fund",
    dueDate: "31/12/2026",
    totalAmount: 1000,
    paid: 800,
    remaining: 200,
    description: "Annual church fund contribution",
  },
];

const FamilyPendingDues = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          Family Dues & Expected Payments
        </h2>

        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">
          + Add Due
        </button>
      </div>

      <TotalPendingCard amount={200} />

      <div className="mt-4 space-y-4">
        {pendingDues.map((due) => (
          <PendingDueCard key={due.id} due={due} />
        ))}
      </div>
    </div>
  );
};

export default FamilyPendingDues;