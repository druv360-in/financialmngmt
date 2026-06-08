export default function ExpensesByCategory() {
  return (
    <div className="border border-gray-200 rounded-md p-4">

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">
          Utilities
        </h3>

        <button className="bg-black text-white px-3 py-1 rounded text-xs">
          Download PDF
        </button>
      </div>

      <div className="text-right text-xs text-gray-500 mb-2">
        1 bill • ₹120.50
      </div>

      <div className="overflow-x-auto">
       <table className="min-w-[1000px] w-full border border-gray-200 text-xs whitespace-nowrap">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-2 py-2 text-center">
              SL
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Bill/Voucher No
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Type
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Date
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Title
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Vendor
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
              BTL12345
            </td>

            <td className="border border-gray-200 px-2 py-2">
              Bill
            </td>

            <td className="border border-gray-200 px-2 py-2">
              20/4/2026
            </td>

            <td className="border border-gray-200 px-2 py-2">
              Water Service
            </td>

            <td className="border border-gray-200 px-2 py-2">
              City Water Department
            </td>

            <td className="border border-gray-200 px-2 py-2">
              Bank Transfer
            </td>

            <td className="border border-gray-200 px-2 py-2 text-right text-red-500">
              ₹120.50
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="bg-red-50 px-4 py-3 text-right">
        <div className="text-red-500 text-xs font-medium">
          Category Total
        </div>

        <div className="text-red-600 font-bold text-lg">
          ₹120.50
        </div>
      </div>

    </div>
  );
}