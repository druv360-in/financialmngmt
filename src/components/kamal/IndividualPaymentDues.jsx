import { useState } from "react";
import {
  FiX,
  FiEdit2,
  FiCheck,
} from "react-icons/fi";

import ProcessPayment from "./ProcessPayment";


const MONTHLY_COLLECTION_AMOUNT = 250;

function IndividualPaymentDues({ closeModal }) {

  // ---- Mandatory top-level fields ----
  const [paymentDate, setPaymentDate] = useState("2026-05-12");
  const [paymentMethod, setPaymentMethod] = useState("");

  // ---- Monthly collection ----
  const [monthlyRange, setMonthlyRange] = useState({ from: "", to: "" });

  // ---- Selection state (drives the total) ----
  const [selectedDues, setSelectedDues] = useState({
    monthlyCollection: false,
    annualChurchFund: false,
  });

  // ---- Annual church fund amounts ----
  const [churchFund, setChurchFund] = useState({
    due: 1000,
    paid: 800,
  });

  const [isEditingChurchFund, setIsEditingChurchFund] = useState(false);
  const [payAmountInput, setPayAmountInput] = useState("");
  const [payError, setPayError] = useState("");

  // ---- Form-level validation errors ----
  const [errors, setErrors] = useState({});

  const churchFundPending = churchFund.due - churchFund.paid;

  const allSelected = Object.values(selectedDues).every(Boolean);

  const handleSelectAll = () => {
    const newValue = !allSelected;

    setSelectedDues({
      monthlyCollection: newValue,
      annualChurchFund: newValue,
    });
  };

  // ---- Running total of everything currently selected ----
  const totalAmount =
    (selectedDues.monthlyCollection ? MONTHLY_COLLECTION_AMOUNT : 0) +
    (selectedDues.annualChurchFund ? churchFundPending : 0);

  const openChurchFundEditor = () => {
    setPayAmountInput("");
    setPayError("");
    setIsEditingChurchFund(true);
  };

  const cancelChurchFundEditor = () => {
    setPayAmountInput("");
    setPayError("");
    setIsEditingChurchFund(false);
  };

  const applyChurchFundPayment = () => {
    const amount = parseFloat(payAmountInput);

    if (Number.isNaN(amount) || amount <= 0) {
      setPayError("Enter a valid amount greater than ₹0.");
      return;
    }

    if (amount > churchFundPending) {
      setPayError(`Amount can't exceed the pending balance of ₹${churchFundPending.toFixed(2)}.`);
      return;
    }

    setChurchFund((prev) => ({
      ...prev,
      paid: prev.paid + amount,
    }));

    setPayAmountInput("");
    setPayError("");
    setIsEditingChurchFund(false);
  };

  const handlePayInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyChurchFundPayment();
    } else if (e.key === "Escape") {
      cancelChurchFundEditor();
    }
  };

  // ---- Validation run right before a payment is processed ----
  const validateBeforeProcessing = () => {
    const newErrors = {};

    if (!paymentDate) {
      newErrors.paymentDate = "Payment date is required.";
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = "Select a payment method.";
    }

    if (!selectedDues.monthlyCollection && !selectedDues.annualChurchFund) {
      newErrors.selection = "Select at least one due to pay.";
    }

    if (selectedDues.monthlyCollection && (!monthlyRange.from || !monthlyRange.to)) {
      newErrors.monthlyRange = "From and To dates are required for the monthly collection.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Runs in the capture phase, before the click reaches ProcessPayment's
  // own button, so an invalid form never triggers the actual payment call.
  const handleProcessPaymentCapture = (e) => {
    const isValid = validateBeforeProcessing();

    if (!isValid) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

      {/* MODAL */}

      <div className="w-full max-w-[512px] rounded-2xl bg-white p-6 shadow-2xl">

        {/* HEADER */}

        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-[17px] font-bold text-gray-800">
              Make Payment - Smith Family
            </h2>

          </div>

          <button
            onClick={closeModal}
            className="text-gray-400 transition hover:text-gray-600"
          >
            <FiX size={20} />
          </button>

        </div>

        {/* PAYMENT DATE */}

        <div className="mt-5">

          <label className="text-[14px] font-semibold text-gray-700">
            Payment Date
            <span className="text-black"> *</span>
          </label>

          <input
            type="date"
            value={paymentDate}
            onChange={(e) => {
              setPaymentDate(e.target.value);
              if (errors.paymentDate) setErrors((prev) => ({ ...prev, paymentDate: undefined }));
            }}
            className={`mt-2 h-[44px] w-full rounded-xl border bg-white px-3 text-[14px] outline-none focus:border-gray-400 ${
              errors.paymentDate ? "border-red-400" : "border-gray-300"
            }`}
          />

          {errors.paymentDate && (
            <p className="mt-1 text-[12px] font-medium text-red-500">{errors.paymentDate}</p>
          )}

        </div>

        {/* PAYMENT METHOD */}

        <div className="mt-4">

          <label className="text-[14px] font-semibold text-gray-700">
            Payment Method
            <span className="text-black"> *</span>
          </label>

          <select
            value={paymentMethod}
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              if (errors.paymentMethod) setErrors((prev) => ({ ...prev, paymentMethod: undefined }));
            }}
            className={`mt-2 h-[44px] w-full rounded-xl border px-3 text-[14px] outline-none focus:border-gray-400 ${
              paymentMethod ? "bg-white text-gray-800" : "bg-[#e4e4e4] text-gray-500"
            } ${errors.paymentMethod ? "border-red-400" : "border-gray-300"}`}
          >

            <option value="">
              Select payment method
            </option>

            <option value="Cash">
              Cash
            </option>

            <option value="UPI">
              UPI
            </option>

            <option value="Bank Transfer">
              Bank Transfer
            </option>

             <option value="Other">
              Other
            </option>

          </select>

          {errors.paymentMethod && (
            <p className="mt-1 text-[12px] font-medium text-red-500">{errors.paymentMethod}</p>
          )}

        </div>

    {/* MONTHLY COLLECTION */}

<div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4">

  <div className="flex items-start gap-3">

    <input
      type="checkbox"
      checked={selectedDues.monthlyCollection}
      onChange={(e) =>
        setSelectedDues((prev) => ({
          ...prev,
          monthlyCollection: e.target.checked,
        }))
      }
      className="mt-1 h-4 w-4 rounded border-gray-300"
    />

    <div className="flex-1">

      <h3 className="text-[15px] font-semibold text-blue-700">
        Monthly Collection
      </h3>

      <p className="mt-1 text-[14px] text-blue-600">
        Amount: ₹{MONTHLY_COLLECTION_AMOUNT.toFixed(2)}
      </p>

      {/* DATE RANGE */}

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">

        <div>
          <label className="mb-1 block text-[13px] font-medium text-gray-700">
            From Date
          </label>

          <input
            type="date"
            value={monthlyRange.from}
            onChange={(e) => {
              setMonthlyRange((prev) => ({ ...prev, from: e.target.value }));
              if (errors.monthlyRange) setErrors((prev) => ({ ...prev, monthlyRange: undefined }));
            }}
            className={`h-[42px] w-full rounded-lg border bg-white px-3 text-[14px] outline-none focus:border-blue-400 ${
              errors.monthlyRange ? "border-red-400" : "border-gray-300"
            }`}
          />
        </div>

        <div>
          <label className="mb-1 block text-[13px] font-medium text-gray-700">
            To Date
          </label>

          <input
            type="date"
            value={monthlyRange.to}
            onChange={(e) => {
              setMonthlyRange((prev) => ({ ...prev, to: e.target.value }));
              if (errors.monthlyRange) setErrors((prev) => ({ ...prev, monthlyRange: undefined }));
            }}
            className={`h-[42px] w-full rounded-lg border bg-white px-3 text-[14px] outline-none focus:border-blue-400 ${
              errors.monthlyRange ? "border-red-400" : "border-gray-300"
            }`}
          />
        </div>

      </div>

      {errors.monthlyRange && (
        <p className="mt-2 text-[12px] font-medium text-red-500">{errors.monthlyRange}</p>
      )}

    </div>

  </div>

</div>

        {/* OTHER PENDING DUES */}

        <div className="mt-5">

          <div className="flex items-center justify-between">

            <h3 className="text-[14px] font-semibold text-gray-700">
              Other Pending Dues
            </h3>

            <button
  onClick={handleSelectAll}
  className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-[12px] font-medium text-gray-600 hover:bg-gray-50"
>
  {allSelected ? "Unselect All" : "Select All"}
</button>

          </div>

          {/* DUE CARD */}

          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">

            <div className="flex items-start gap-3">

             <input
  type="checkbox"
  checked={selectedDues.annualChurchFund}
  onChange={(e) =>
    setSelectedDues((prev) => ({
      ...prev,
      annualChurchFund: e.target.checked,
    }))
  }
  className="mt-1 h-4 w-4 rounded border-gray-300"
/>

              <div className="flex-1">

             <div className="flex items-start justify-between gap-4">

  <h4 className="text-[15px] font-semibold leading-5 text-gray-800">
    Annual Church Fund
  </h4>

  <div className="flex items-start gap-4">

    <div className="text-[13px] leading-5">
      <p className="text-gray-500">
        Due: ₹{churchFund.due.toFixed(2)} | Paid: ₹{churchFund.paid.toFixed(2)}
      </p>

      {churchFundPending > 0 ? (
        <p className="font-semibold text-red-500">
          Pending: ₹{churchFundPending.toFixed(2)}
        </p>
      ) : (
        <p className="font-semibold text-green-600">
          Fully Paid
        </p>
      )}
    </div>

    {churchFundPending > 0 && (
      <button
        onClick={openChurchFundEditor}
        className="mt-0.5 text-gray-500 transition hover:text-blue-600"
        title="Add a payment towards the pending amount"
      >
        <FiEdit2 size={16} />
      </button>
    )}

  </div>

</div>

              {/* INLINE PAY EDITOR */}

              {isEditingChurchFund && (

                <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3">

                  <label className="mb-1 block text-[13px] font-medium text-gray-700">
                    Amount to pay now (Pending: ₹{churchFundPending.toFixed(2)})
                  </label>

                  <div className="flex items-center gap-2">

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      max={churchFundPending}
                      autoFocus
                      value={payAmountInput}
                      onChange={(e) => {
                        setPayAmountInput(e.target.value);
                        if (payError) setPayError("");
                      }}
                      onKeyDown={handlePayInputKeyDown}
                      placeholder={`e.g. ${churchFundPending.toFixed(2)}`}
                      className="h-[38px] w-full rounded-lg border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-blue-400"
                    />

                    <button
                      onClick={applyChurchFundPayment}
                      className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700"
                      title="Confirm amount"
                    >
                      <FiCheck size={16} />
                    </button>

                    <button
                      onClick={cancelChurchFundEditor}
                      className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 transition hover:bg-gray-100"
                      title="Cancel"
                    >
                      <FiX size={16} />
                    </button>

                  </div>

                  {payError && (
                    <p className="mt-1 text-[12px] font-medium text-red-500">
                      {payError}
                    </p>
                  )}

                </div>

              )}

              </div>

            </div>

          </div>

          {errors.selection && (
            <p className="mt-2 text-[12px] font-medium text-red-500">{errors.selection}</p>
          )}

        </div>

        {/* TOTAL */}

        <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">

          <span className="text-[14px] font-semibold text-gray-700">
            Total Payable
          </span>

          <span className="text-[16px] font-bold text-gray-800">
            ₹{totalAmount.toFixed(2)}
          </span>

        </div>

        {/* ACTION BUTTONS */}

        <div className="mt-6 flex items-center gap-3">

     <div className="flex-1" onClickCapture={handleProcessPaymentCapture}>
  <ProcessPayment amount={totalAmount} />
</div>

          <button
            onClick={closeModal}
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-[14px] font-semibold text-gray-700 hover:bg-gray-50"
          >

            Cancel

          </button>

        </div>

      </div>

    </div>
  );
}

export default IndividualPaymentDues;