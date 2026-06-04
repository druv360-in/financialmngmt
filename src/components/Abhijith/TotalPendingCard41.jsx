
import { AlertCircle } from "lucide-react";

const TotalPendingCard = ({ amount }) => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
      <AlertCircle className="text-yellow-600" size={22} />

      <div>
        <p className="text-sm text-gray-600">Total Pending Amount</p>

        <h3 className="text-2xl font-bold text-yellow-700">
          ${amount.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default TotalPendingCard;