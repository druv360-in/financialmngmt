export default function IncomeByCategory() {
  return (
    <div className="border border-gray-200 rounded-md p-4 mb-4">

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">
          Special Offerings
        </h3>

        <button className="bg-black text-white px-3 py-1 rounded text-xs">
          Download PDF
        </button>
      </div>

      <div className="text-right text-xs text-gray-500 mb-2">
        1 receipt • ₹1000.00
      </div>

      <table className="w-full border border-gray-200 text-xs">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-2 py-2 text-center">
              SL
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Receipt No
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Date
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Title
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Payer
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Payment Method
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-gray-200 px-2 py-2">
              1
            </td>

            <td className="border border-gray-200 px-2 py-2 text-blue-600">
              RCP1001
            </td>

            <td className="border border-gray-200 px-2 py-2">
              14/4/2026
            </td>

            <td className="border border-gray-200 px-2 py-2">
              Building Fund Donation
            </td>

            <td className="border border-gray-200 px-2 py-2">
              John Smith
            </td>

            <td className="border border-gray-200 px-2 py-2">
              Check
            </td>

            <td className="border border-gray-200 px-2 py-2 text-right text-green-600">
              ₹1000.00
            </td>
          </tr>
        </tbody>
      </table>

      <div className="bg-green-50 px-4 py-3 text-right">
        <div className="text-green-600 text-xs font-medium">
          Category Total
        </div>

        <div className="text-green-700 font-bold text-lg">
          ₹1000.00
        </div>
      </div>

    </div>
  );
}