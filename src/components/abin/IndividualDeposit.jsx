import { LiaDownloadSolid } from "react-icons/lia";

function IndividualDeposit({
  personName,
  date,
  amount,
  depositType,
}) {
  const handleDownload = () => {
    alert("Downloading");
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 mb-3 bg-white">

      <div className="flex items-center gap-3">

        <button
          onClick={handleDownload}
          className="flex items-center justify-center"
        >
          <LiaDownloadSolid className="text-blue-700 text-lg font-bold cursor-pointer" />
        </button>

        <div>
          <h3 className="font-semibold text-gray-800 text-sm">
            Deposited by {personName}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            {date}
            <span className="mx-2">•</span>
            {depositType}
          </p>

          <p className="text-lg font-bold text-blue-600 mt-2">
            ₹{amount}
          </p>
        </div>

      </div>

    </div>
  );
}

export default IndividualDeposit;