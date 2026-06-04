import { useState } from "react";
import { X } from "lucide-react";

export default function EditReceipt({ onClose }) {
  const [form, setForm] = useState({
    title: "",
    payer: "",
    category: "",
    amount: "",
    receiptDate: "",
    paymentMethod: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!form.payer) {
      newErrors.payer = "Payer is required";
    }

    if (!form.category) {
      newErrors.category = "Category is required";
    }

    if (!form.amount) {
      newErrors.amount = "Amount is required";
    }

    if (!form.receiptDate) {
      newErrors.receiptDate = "Receipt date is required";
    }

    if (!form.paymentMethod) {
      newErrors.paymentMethod = "Payment method is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = () => {
    const isValid = validate();

    if (!isValid) return;

   
    alert("Updated Successfully!");
    
    // Optionally close the modal after the user clicks "OK"
    if (onClose) onClose(); 
  };

  const currentAmount = 2500;
  const newTotal = parseFloat(form.amount) || 0;

  return (
    <>
     
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-gray-900">
              Edit Receipt
            </h2>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg p-1 transition"
            >
              <X size={18} />
            </button>
          </div>

          
          <div className="grid grid-cols-2 gap-4">

            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">
                Title <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className={`rounded-lg px-3 py-2 text-sm outline-none border transition
                ${
                  errors.title
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              />

              {errors.title && (
                <span className="text-red-500 text-xs">
                  {errors.title}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">
                Payer <span className="text-red-500">*</span>
              </label>

              <select
                name="payer"
                value={form.payer}
                onChange={handleChange}
                className={`rounded-lg px-3 py-2 text-sm outline-none border
                ${
                  errors.payer
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <option value="">Select payer</option>
                <option value="john">John Smith</option>
                <option value="jane">Jane Doe</option>
              </select>

              {errors.payer && (
                <span className="text-red-500 text-xs">
                  {errors.payer}
                </span>
              )}
            </div>

            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">
                Category <span className="text-red-500">*</span>
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={`rounded-lg px-3 py-2 text-sm outline-none border
                ${
                  errors.category
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <option>Tithes & Offerings</option>
                <option>Special Offerings</option>
                <option>Monthly Collection</option>
              </select>

              {errors.category && (
                <span className="text-red-500 text-xs">
                  {errors.category}
                </span>
              )}
            </div>

            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">
                Amount <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                className={`rounded-lg px-3 py-2 text-sm outline-none border
                ${
                  errors.amount
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              />

              {errors.amount && (
                <span className="text-red-500 text-xs">
                  {errors.amount}
                </span>
              )}

              
              <div className="bg-purple-50 rounded-lg px-3 py-2 mt-1 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-purple-600 font-medium">
                    {form.category}
                  </span>

                  <span className="text-purple-400">
                    Current
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-purple-400">
                    Category:
                  </span>

                  <span className="text-purple-600">
                    ₹{currentAmount.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-purple-400">
                    New Total:
                  </span>

                  <span className="text-purple-700 font-semibold">
                    ₹{newTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">
                Receipt Date <span className="text-red-500">*</span>
              </label>

              <input
                type="date"
                name="receiptDate"
                value={form.receiptDate}
                onChange={handleChange}
                className={`rounded-lg px-3 py-2 text-sm outline-none border
                ${
                  errors.receiptDate
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              />

              {errors.receiptDate && (
                <span className="text-red-500 text-xs">
                  {errors.receiptDate}
                </span>
              )}
            </div>

            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">
                Payment Method <span className="text-red-500">*</span>
              </label>

              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                className={`rounded-lg px-3 py-2 text-sm outline-none border
                ${
                  errors.paymentMethod
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <option>Cash</option>
                <option>Bank Transfer</option>
                <option>Cheque</option>
                <option>Online</option>
              </select>

              {errors.paymentMethod && (
                <span className="text-red-500 text-xs">
                  {errors.paymentMethod}
                </span>
              )}
            </div>

            
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-xs font-medium text-gray-500">
                Description
              </label>

              <textarea
                rows={3}
                name="description"
                value={form.description}
                onChange={handleChange}
                className="rounded-lg px-3 py-2 text-sm outline-none border border-gray-200 bg-gray-50 resize-none"
              />
            </div>
          </div>

         
          <div className="flex gap-3 mt-5">
            <button
              type="button"
              onClick={handleUpdate}
              className="flex-1 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-xl py-2.5 transition"
            >
              Update Receipt
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-5 text-sm font-medium text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>
    </>
  );
}