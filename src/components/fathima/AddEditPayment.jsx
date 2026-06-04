import { useState } from "react";
import { useLocation } from "react-router-dom";

function AddEditPayment() {
  const location = useLocation();

  const formConfig = {
    add: {
      title: "Add Payment",
      buttonText: "Add Payment",
      amount: "",
      date: "",
      category: "",
      method: "",
      description: "",
    },
    edit: {
      title: "Edit Payment",
      buttonText: "Update Payment",
      amount: "500",
      date: "2026-05-25",
      category: "Tithes",
      method: "Cash",
      description: "Monthly church payment",
    },
  };

  const isEditMode = location.pathname === "/edit-payment";
  const data = isEditMode ? formConfig.edit : formConfig.add;

  const [amount, setAmount] = useState(data.amount);
  const [date, setDate] = useState(data.date);
  const [category, setCategory] = useState(data.category);
  const [method, setMethod] = useState(data.method);
  const [description, setDescription] = useState(data.description);

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    let newErrors = {};

    if (!amount) newErrors.amount = true;
    if (!date) newErrors.date = true;
    if (!category) newErrors.category = true;
    if (!method) newErrors.method = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(
        isEditMode
          ? "Payment Updated Successfully!"
          : "Payment Added Successfully!"
      );
    }
  };

  const handleCancel = () => {
    alert("Payment Cancelled!");
  };

  const handleClose = () => {
    alert("Modal Closed!");
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-gray-300 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-4 sm:p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-2xl text-gray-400 hover:text-black"
        >
          ×
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">
          {data.title}
        </h1>

        <div className="mb-4">
          <label className="block text-sm sm:text-base font-semibold mb-2">
            Amount *
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className={`w-full border bg-gray-100 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300
            ${errors.amount ? "border-red-500" : "border-gray-300"}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm sm:text-base font-semibold mb-2">
            Date *
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`w-full border bg-gray-100 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300
            ${errors.date ? "border-red-500" : "border-gray-300"}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm sm:text-base font-semibold mb-2">
            Category *
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`w-full border bg-gray-100 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300
            ${errors.category ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">Select category</option>
            <option>Tithes & Offerings</option>
            <option>Special Offerings</option>
            <option>Building Fund</option>
            <option>Mission Fund</option>
            <option>Monthly Collection</option>
            <option>Donations</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm sm:text-base font-semibold mb-2">
            Payment Method *
          </label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className={`w-full border bg-gray-100 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300
            ${errors.method ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">Select method</option>
            <option>Cash</option>
            <option>Check</option>
            <option>Bank Transfer</option>
            <option>Online</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm sm:text-base font-semibold mb-2">
            Description
          </label>
          <textarea
            rows="2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Additional notes..."
            className="w-full border bg-gray-100 border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base resize-none outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-black text-white py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800"
          >
            {data.buttonText}
          </button>

          <button
            onClick={handleCancel}
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg text-sm sm:text-base hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEditPayment;