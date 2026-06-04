import { useState } from "react";
import { FaPlus } from "react-icons/fa";

import PaidDueStats from "./PaidDueStats";
import PaidDueCard from "./PaidDueCard";
import AddEditNewDue from "./AddEditNewDue";

const FamilyPaymentTracker = () => {

  // Modal State
  const [isOpen, setIsOpen] = useState(false);

  // Edit State
  const [editDue, setEditDue] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // Filter Year
  const [selectedYear, setSelectedYear] = useState("2026");

  // Due List State
//const [dues, setDues] = useState([]);
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



  // Add / Update Due
  const addDue = (newDue) => {

    // Update Existing Due
    if (editIndex !== null) {

      const updatedDues = [...dues];

      updatedDues[editIndex] = newDue;

      setDues(updatedDues);

      setEditIndex(null);

      setEditDue(null);

    }

    // Add New Due
    else {

      setDues([...dues, newDue]);

    }

  };



  // Edit Due
  const handleEdit = (due, index) => {

    setEditDue(due);

    setEditIndex(index);

    setIsOpen(true);

  };

  // Delete Due
  const handleDelete = (index) => {
    const updatedDues = dues.filter(
      (_, i) => i !== index
    );
    setDues(updatedDues);
  };



  // Filter By Year
  const filteredDues = dues.filter((due) => {

    return (
      new Date(due.dueDate)
        .getFullYear()
        .toString() === selectedYear
    );

  });



  return (
    <div className="w-full max-w-4xl bg-white border border-gray-300 rounded-xl shadow-sm p-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">

        <h1 className="text-lg font-semibold text-gray-800">
          Payment Tracker - Accounting Year
        </h1>

        <div className="flex items-center gap-3">

          {/* Year Dropdown */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="
              border
              rounded-lg
              px-2
              py-2
              text-sm
              outline-none
            "
          >

            <option>2026</option>
            <option>2025</option>
            <option>2024</option>

          </select>

          {/* Add Payment Button */}
          <button
            className="
              flex
              items-center
              gap-2
              bg-black
              text-white
              px-4
              py-2
              rounded-lg
              text-sm
              hover:bg-gray-800
              transition
            "
          >

            <FaPlus size={12} />

            Add Payment

          </button>

        </div>

      </div>

      {/* Component 44 */}
      <div className="mb-4">

        <PaidDueStats dues={filteredDues} />

      </div>

      {/* Component 45 */}
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

      {/* Component 46 */}
      <AddEditNewDue
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addDue={addDue}
        editDue={editDue}
      />
      

    </div>
  );
};

export default FamilyPaymentTracker;