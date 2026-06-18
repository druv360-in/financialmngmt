import { FiDollarSign } from "react-icons/fi";

function ProcessPayment() {
  const handlePayment = () => {
    alert("Payment Processed Successfully!");
  };

  return (
    <button
      onClick={handlePayment}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-500 px-5 py-3 text-[14px] font-semibold text-white hover:bg-gray-600"
    >
      <FiDollarSign size={16} />
      Process Payment
    </button>
  );
}

export default ProcessPayment;