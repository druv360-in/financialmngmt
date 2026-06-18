import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import PaidDueStats from "./PaidDueStats";
import PaidDueCard from "./PaidDueCard";

// Fathima Component
import AddEditPayment from "../fathima/AddEditPayment";

const FamilyPaymentTracker = () => {
  // Payment Popup State
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  // Edit State
  const [editDue, setEditDue] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // Filter Year
  const [selectedYear, setSelectedYear] = useState("2026");

  // Payment List
  const [dues, setDues] = useState([
    {
      title: "Annual Fund",
      amount: 1000,
      dueDate: "2026-07-21",
    },
    {
      title: "Xmas",
      amount: 200,
      dueDate: "2026-10-13",
    },
  ]);

  // Add / Update Payment
  const addDue = (newDue) => {
    // Update Existing
    if (editIndex !== null) {
      const updatedDues = [...dues];

      updatedDues[editIndex] = newDue;

      setDues(updatedDues);

      setEditIndex(null);
      setEditDue(null);
    }

    // Add New
    else {
      setDues([...dues, newDue]);
    }
  };

  // Edit Payment
  const handleEdit = (due, index) => {
    setEditDue(due);
    setEditIndex(index);
    setIsPaymentOpen(true);
  };

  // Delete Payment
  const handleDelete = (index) => {
    const updatedDues = dues.filter(
      (_, i) => i !== index
    );

    setDues(updatedDues);
  };

  // Filter Year
  const filteredDues = dues.filter((due) => {
    return (
      new Date(due.dueDate)
        .getFullYear()
        .toString() === selectedYear
    );
  });

  return (
    <div className="w-full bg-white border border-gray-300 rounded-xl shadow-sm p-5">
      {/* Header */}
      <div className="mb-4">

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-800">
            Payment Tracker - Accounting Year
          </h1>

          <div className="flex items-center gap-3">
            <select
              value={selectedYear}
              onChange={(e) =>
                setSelectedYear(e.target.value)
              }
              className="border rounded-lg px-2 py-2 text-sm outline-none"
            >
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
            </select>

            <button
              onClick={() => {
                setEditDue(null);
                setEditIndex(null);
                setIsPaymentOpen(true);
              }}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              <FaPlus size={12} />
              Add Payment
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <h1 className="text-lg font-semibold text-gray-800">
            Payment Tracker - Accounting Year
          </h1>

          <button
            onClick={() => {
              setEditDue(null);
              setEditIndex(null);
              setIsPaymentOpen(true);
            }}
            className="
              mt-4
              w-full
              bg-black
              text-white
              py-3
              rounded-xl
              text-sm
              font-medium
              shadow-md
              hover:bg-gray-800
              transition
            "
          >
            + Add Payment
          </button>

          <select
            value={selectedYear}
            onChange={(e) =>
              setSelectedYear(e.target.value)
            }
            className="
              mt-3
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              text-sm
              outline-none
              bg-white
            "
          >
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>

      </div>

      {/* Stats */}
      <div className="mb-4">
        <PaidDueStats dues={filteredDues} />
      </div>

      {/* Payment Cards */}
      <div className="space-y-4">
        {filteredDues.map((due, index) => (
          <PaidDueCard
            key={index}
            title={due.title}
            amount={due.amount}
            dueDate={due.dueDate}
            onEdit={() => handleEdit(due, index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>

      {/* Add / Edit Payment Popup */}
      <AddEditPayment
        isOpen={isPaymentOpen}
        setIsOpen={setIsPaymentOpen}
        editPayment={editDue}
        addPayment={addDue}
      />
    </div>
  );
};

export default FamilyPaymentTracker;