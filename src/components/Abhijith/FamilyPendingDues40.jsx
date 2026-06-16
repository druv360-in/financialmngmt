import { useState } from "react";
import TotalPendingCard from "./TotalPendingCard41";
import PendingDueCard from "./PendingDueCard42";
import AddEditNewDue from "../alka/AddEditNewDue";
import FamilyDuePayment from "../fathima/FamilyDuePayment";

const FamilyPendingDues = () => {
  const [pendingDues, setPendingDues] = useState([
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
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedDue, setSelectedDue] = useState(null);

  const handleEdit = (due) => {
    setSelectedDue(due);
    setIsOpen(true);
  };

  const handlePay = (due) => {
    setSelectedDue(due);
    setIsPaymentOpen(true);
  };

  const handleDelete = (id) => {
    setPendingDues((prev) =>
      prev.filter((due) => due.id !== id)
    );
  };
  const totalPendingAmount = pendingDues.reduce(
  (total, due) => total + due.remaining,
  0
  );

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm">
      <div className="mb-4">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Family Dues & Expected Payments
          </h2>

          <button
            onClick={() => {
              setSelectedDue(null);
              setIsOpen(true);
            }}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:opacity-90"
          >
            + Add Due
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <h2 className="text-lg font-semibold">
            Family Dues & Expected Payments
          </h2>

          <button
            onClick={() => {
              setSelectedDue(null);
              setIsOpen(true);
            }}
            className="mt-3 w-full bg-black text-white py-3 rounded-xl text-sm font-medium"
          >
            + Add Due
          </button>
        </div>
      </div>

      <TotalPendingCard amount={totalPendingAmount} />

      <div className="mt-4 space-y-4">
        {pendingDues.map((due) => (
          <PendingDueCard
            key={due.id}
            due={due}
            onEdit={() => handleEdit(due)}
            onPay={() => handlePay(due)}
            onDelete={() => handleDelete(due.id)}
          />
        ))}
      </div>

      {/* Alka Popup */}
      <AddEditNewDue
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addDue={(newDue) => {

          if (selectedDue) {

            setPendingDues((prev) =>
              prev.map((due) =>
                due.id === selectedDue.id
                  ? {
                      ...due,
                      title: newDue.title,
                      category: newDue.category,
                      dueDate: newDue.dueDate,
                      description: newDue.description,
                      totalAmount: Number(newDue.amount),
                      remaining:
                        Number(newDue.amount) - due.paid,
                    }
                  : due
              )
            );

          } else {

            setPendingDues((prev) => [
              ...prev,
              {
                id: Date.now(),
                title: newDue.title,
                status: "pending",
                category: newDue.category,
                dueDate: newDue.dueDate,
                totalAmount: Number(newDue.amount),
                paid: 0,
                remaining: Number(newDue.amount),
                description: newDue.description,
              },
            ]);

          }

          setSelectedDue(null);

        }}
        editDue={selectedDue}
      />

      {/* Fathima Popup */}
      
      <FamilyDuePayment
        isOpen={isPaymentOpen}
        setIsOpen={setIsPaymentOpen}
        due={selectedDue}
        onPayment={(paymentAmount) => {

          setPendingDues((prev) =>
            prev.map((d) => {

              if (d.id !== selectedDue.id) return d;

              const newPaid =
                d.paid + Number(paymentAmount);

              const remaining =
                Math.max(0, d.totalAmount - newPaid);

              let status = "pending";

              if (newPaid >= d.totalAmount) {
                status = "paid";
              } else if (newPaid > 0) {
                status = "partial";
              }

              return {
                ...d,
                paid: newPaid,
                remaining,
                status,
              };
            })
          );

        }}
      />
    </div>
  );
};

export default FamilyPendingDues;