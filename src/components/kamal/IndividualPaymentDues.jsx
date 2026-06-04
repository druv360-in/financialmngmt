import {
  FiDollarSign,
  FiX,
} from "react-icons/fi";

function IndividualPaymentDues({
  closeModal,
}) {
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
            <span className="text-red-500"> *</span>
          </label>

          <input
            type="date"
            value="2026-05-12"
            className="mt-2 h-[44px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-gray-400"
          />

        </div>

        {/* PAYMENT METHOD */}

        <div className="mt-4">

          <label className="text-[14px] font-semibold text-gray-700">
            Payment Method
            <span className="text-red-500"> *</span>
          </label>

          <select className="mt-2 h-[44px] w-full rounded-xl  bg-[#e4e4e4] px-3 text-[14px] text-gray-500 outline-none">

            <option>
              Select payment method
            </option>

            <option>
              Cash
            </option>

            <option>
              UPI
            </option>

            <option>
              Bank Transfer
            </option>

          </select>

        </div>

        {/* MONTHLY COLLECTION */}

        <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4">

          <div className="flex items-start gap-3">

            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300"
            />

            <div>

              <h3 className="text-[15px] font-semibold text-blue-700">
                Monthly Collection
              </h3>

              <p className="mt-1 text-[14px] text-blue-600">
                Amount: ₹250.00
              </p>

            </div>

          </div>

        </div>

        {/* OTHER DUES */}

        <div className="mt-5">

          <div className="flex items-center justify-between">

            <h3 className="text-[14px] font-semibold text-gray-700">
              Other Pending Dues
            </h3>

            <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-[12px] font-medium text-gray-600 hover:bg-gray-50">

              Select All

            </button>

          </div>

          {/* DUE CARD */}

          <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4">

            <div className="flex items-start gap-3">

              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />

              <div className="flex-1">

                <div className="flex items-start justify-between gap-4">

                  <h4 className="text-[15px] font-semibold leading-5 text-gray-800">
                    Annual Church Fund
                  </h4>

                  <div className="text-right text-[13px] leading-5">

                    <p className="text-gray-500">
                      Due: ₹1000.00 | Paid: ₹800.00
                    </p>

                    <p className="font-semibold text-red-500">
                      Pending: ₹200.00
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ACTION BUTTONS */}

        <div className="mt-6 flex items-center gap-3">

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-500 px-5 py-3 text-[14px] font-semibold text-white hover:bg-gray-600">

            <FiDollarSign size={16} />

            Process Payment

          </button>

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