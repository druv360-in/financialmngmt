import { FiDollarSign } from "react-icons/fi";

function ProcessPayment({ amount = 0 }) {
  const handlePayment = () => {
    alert(`Payment of ₹${amount.toFixed(2)} Processed Successfully!`);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={amount <= 0}
      className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold text-white transition ${
        amount > 0
          ? "bg-gray-500 hover:bg-gray-600"
          : "cursor-not-allowed bg-gray-300"
      }`}
    >
      <FiDollarSign size={16} />
      Process Payment {amount > 0 ? `(₹${amount.toFixed(2)})` : ""}
    </button>
  );
}

export default ProcessPayment;
