import { useState } from "react";

function DepositCash({ availableCash ,onCancel}) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [depositedBy, setDepositedBy] = useState("");

  const [errors, setErrors] = useState({});

  const handleDeposit = () => {
    let newErrors = {};

    if (!amount) newErrors.amount = true;
    if (!date) newErrors.date = true;
    if (!depositedBy) newErrors.depositedBy = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Cash Deposited Successfully!");
    }
  };

 const handleCancel = () => {
  if (onCancel) {
    onCancel(); // closes popup from parent
  }
};

  return (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    
      <style>
        {`
          input[type="number"] {
            appearance: auto;
          }

          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            opacity: 1;
            height: 20px;
            cursor: pointer;
            filter: invert(1);
          }
            
        `}
      </style>
      
      <div className="w-full max-w-[620px] bg-[#f7f7f7] rounded-sm shadow-md p-6 relative border border-gray-100">
        {/* Close Button */}
        <button className="absolute top-3 right-4 text-[22px] text-gray-600 font-light"
        onClick={handleCancel}
      >
          ×
        </button>

        {/* Heading */}
        <h2 className="text-[22px] font-semibold text-black mb-6">
          Deposit Cash to Bank
        </h2>

        {/* Available Cash */}
        <div className="bg-[#ebebeb] rounded-[10px] p-4 mb-5">
          <p className="text-[16px] text-gray-600 mb-1 font-medium">
            Available Cash in Hand
          </p>

          <h1 className="text-[24px] font-bold text-black">
            ₹-{availableCash}.00
          </h1>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="block text-[16px] font-semibold text-black mb-1">
            Amount to Deposit <span className="text-red-500">*</span>
          </label>

          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={`w-full h-[48px] bg-gray-200 rounded-[12px] px-4 text-[16px] text-gray-700 outline-none shadow-inner border-2 ${
              errors.amount ? "border-red-500" : "border-transparent"
            }`}
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-[16px] font-semibold text-black mb-1">
            Date <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="12-05-2026"
            className={`w-full h-[42px] bg-gray-200 rounded-[10px] px-4 text-[16px] text-black outline-none border-2 ${
              errors.date ? "border-red-500" : "border-transparent"
            }`}
          />
        </div>

        {/* Deposited By */}
        <div className="mb-4">
          <label className="block text-[16px] font-semibold text-black mb-1">
            Deposited By <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            placeholder="Name of person depositing"
            value={depositedBy}
            onChange={(e) => setDepositedBy(e.target.value)}
            className={`w-full h-[42px] bg-gray-200 rounded-[10px] px-4 text-[16px] text-black outline-none border-2 ${
              errors.depositedBy ? "border-red-500" : "border-transparent"
            }`}
          />
        </div>

        {/* Description */}
        <div className="mb-10">
          <label className="block text-[16px] font-semibold text-black mb-1">
            Description
          </label>

          <textarea
            rows="3"
            placeholder="Additional notes..."
            className="w-full bg-gray-200 rounded-[10px] px-4 py-3 text-[16px] text-black outline-none resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDeposit}
            className="flex-1 bg-[#00001a] text-white h-[44px] rounded-[10px] text-[16px] font-semibold hover:bg-black"
          >
            Deposit to Bank
          </button>

          <button
            onClick={handleCancel}
            className="px-7 h-[44px] border border-gray-300 bg-[#f7f7f7] rounded-[10px] text-[16px] font-medium hover:bg-gray-100"
          >
            
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DepositCash;