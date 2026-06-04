import {
  FiSearch,
  FiAlertCircle,
  FiDollarSign,
} from "react-icons/fi";

function FamilyDuesStatus({
  openPaymentModal,
}) {
  return (
    <div className="mt-6 w-full">

      <div className="mx-auto w-full max-w-[1180px]">

        {/* SEARCH BAR */}

        <div className="relative mb-6">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={15}
          />

          <input
            type="text"
            placeholder="Search families..."
            className="h-[46px] w-full rounded-2xl border border-gray-200 bg-[#f8f8f9] pl-11 pr-4 text-sm outline-none"
          />

        </div>

        {/* MAIN CARD */}

        <div className="rounded-[24px] border border-gray-200 bg-white p-5">

          <div className="rounded-2xl bg-white">

            {/* TITLE */}

            <div className="border-b border-gray-100 px-5 py-4">

              <h2 className="text-lg font-bold text-gray-800">
                Family Dues Status
              </h2>

            </div>

            {/* TABLE */}

            <div className="overflow-x-auto">

              <table className="min-w-full w-full border-collapse">

                <thead>

                  <tr className="border-b border-gray-100 bg-gray-50">

                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      SL No
                    </th>

                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Family Name
                    </th>

                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Head of Family
                    </th>

                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Monthly Due
                    </th>

                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Monthly Status
                    </th>

                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Other Dues
                    </th>

                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Total Paid
                    </th>

                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Total Due
                    </th>

                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-700">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {/* ROW 1 */}

                  <tr className="border-b border-[#f3dede] bg-[#fff6f6]">

                    <td className="px-4 py-4 text-sm font-medium">
                      1
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold">
                      Smith Family
                    </td>

                    <td className="px-4 py-4 text-sm">
                      John Smith
                    </td>

                    <td className="px-4 py-4 text-sm">

                      <p className="font-semibold">
                        ₹250.00
                      </p>

                      <p className="text-sm text-gray-500">
                        Paid: ₹0.00
                      </p>

                    </td>

                    <td className="px-4 py-4">

                      <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
                        Unpaid
                      </span>

                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap text-gray-500">
                      None
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold text-green-600">
                      ₹800.00
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold text-red-600">
                      ₹450.00
                    </td>

                    <td className="px-4 py-4">

                      <button
                        onClick={openPaymentModal}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700"
                      >

                        <FiDollarSign size={14} />

                        <span>
                          Pay
                        </span>

                      </button>

                    </td>

                  </tr>

                  {/* ROW 2 */}

                  <tr className="bg-[#fff6f6]">

                    <td className="px-4 py-4 text-sm font-medium">
                      2
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold">
                      Johnson Family
                    </td>

                    <td className="px-4 py-4 text-sm">
                      Robert Johnson
                    </td>

                    <td className="px-4 py-4 text-sm">

                      <p className="font-semibold">
                        ₹150.00
                      </p>

                      <p className="text-sm text-gray-500">
                        Paid: ₹0.00
                      </p>

                    </td>

                    <td className="px-4 py-4">

                      <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-semibold text-red-600">
                        Unpaid
                      </span>

                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap text-gray-500">
                      None
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold text-green-600">
                      ₹0.00
                    </td>

                    <td className="px-4 py-4 text-sm font-semibold text-red-600">
                      ₹650.00
                    </td>

                    <td className="px-4 py-4">

                      <button
                        onClick={openPaymentModal}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700"
                      >

                        <FiDollarSign size={14} />

                        <span>
                          Pay
                        </span>

                      </button>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* ALERT */}

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3">

            <FiAlertCircle
              className="mt-1 text-yellow-700"
              size={18}
            />

            <div>

              <h3 className="text-sm font-semibold text-yellow-700">
                Attention Required
              </h3>

              <p className="mt-2 text-sm text-yellow-800">
                2 families have unpaid dues totaling ₹1100.00.
                Please follow up for collections.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default FamilyDuesStatus;