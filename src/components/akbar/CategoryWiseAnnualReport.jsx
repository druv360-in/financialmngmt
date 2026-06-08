import IncomeByCategory from "./IncomeByCategory";
import ExpensesByCategory from "./ExpensesByCategory";

export default function CategoryWiseAnnualReport() {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-6 p-3 py-4">

      {/* Main Report Box */}
      <div className="w-full bg-white border border-gray-300 rounded-lg p-3 md:p-5 shadow-sm">

        <h1 className="text-xl sm:text-2xl font-bold mb-1">
          Category-wise Annual Reports
        </h1>

        <p className="text-gray-500 text-xs mb-6">
          Financial Year 2026-2027
        </p>

        {/* Income Heading */}
        <h2 className="font-bold text-base mb-4">
          Receipts (Income) by Category
        </h2>

        {/* Monthly Collection */}

        <div className="border border-gray-200 rounded-md p-4 mb-4">

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
            <h3 className="font-semibold text-sm">
              Monthly Collection
            </h3>

            <button className="bg-black text-white px-3 py-1 rounded text-xs">
              Download PDF
            </button>
          </div>

          <div className="text-right text-xs text-gray-500 mb-2">
            1 receipt • ₹750.00
          </div>

          <div className="overflow-x-auto">
           <table className="min-w-[850px] w-full border border-gray-200 text-xs whitespace-nowrap">
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
                <td className="border border-gray-200 px-2 py-2">1</td>

                <td className="border border-gray-200 px-2 py-2 text-blue-600">
                  RCP1002
                </td>

                <td className="border border-gray-200 px-2 py-2">
                  15/4/2026
                </td>

                <td className="border border-gray-200 px-2 py-2">
                  Monthly Collection
                </td>

                <td className="border border-gray-200 px-2 py-2">
                  John Smith
                </td>

                <td className="border border-gray-200 px-2 py-2">
                  Cash
                </td>

                <td className="border border-gray-200 px-2 py-2 text-right text-green-600">
                  ₹750.00
                </td>
              </tr>
            </tbody>
          </table>
          </div>

          <div className="bg-green-50 px-4 py-3 text-right">
            <div className="text-green-600 text-xs font-medium">
              Category Total
            </div>

            <div className="text-green-700 font-bold text-lg">
              ₹750.00
            </div>
          </div>

        </div>

        {/* Special Offerings Component */}
        <IncomeByCategory />

        {/* Tithes & Offerings */}

        <div className="border border-gray-200 rounded-md p-4 mb-6">

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
            <h3 className="font-semibold text-sm">
              Tithes & Offerings
            </h3>

            <button className="bg-black text-white px-3 py-1 rounded text-xs">
              Download PDF
            </button>
          </div>

          <div className="text-right text-xs text-gray-500 mb-2">
            1 receipt • ₹2500.00
          </div>

          <div className="overflow-x-auto">
           <table className="min-w-[850px] w-full border border-gray-200 text-xs whitespace-nowrap">
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
                <td className="border border-gray-200 px-2 py-2">1</td>

                <td className="border border-gray-200 px-2 py-2 text-blue-600">
                  RCP1000
                </td>

                <td className="border border-gray-200 px-2 py-2">
                  13/4/2026
                </td>

                <td className="border border-gray-200 px-2 py-2">
                  Sunday Offering
                </td>

                <td className="border border-gray-200 px-2 py-2">
                  Congregation
                </td>

                <td className="border border-gray-200 px-2 py-2">
                  Cash
                </td>

                <td className="border border-gray-200 px-2 py-2 text-right text-green-600">
                  ₹2500.00
                </td>
              </tr>
            </tbody>
          </table>
          </div>

          <div className="bg-green-50 px-4 py-3 text-right">
            <div className="text-green-600 text-xs font-medium">
              Category Total
            </div>

            <div className="text-green-700 font-bold text-lg">
              ₹2500.00
            </div>
          </div>

        </div>

        {/* Expense Heading */}

        <h2 className="font-bold text-base mb-4">
          Bills (Expenses) by Category
        </h2>

        {/* Expense Component */}
        <ExpensesByCategory />

      </div>

    </div>
  );
}