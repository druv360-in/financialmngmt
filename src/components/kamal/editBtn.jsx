import { useEffect, useState } from "react";

function EditBtn({
  open,
  onClose,
  initialValues,
  onSave,
}) {
  const [vals, setVals] = useState({});

  useEffect(() => {
    setVals(initialValues || {});
  }, [initialValues]);

  if (!open) return null;

  function handleChange(field, value) {
    setVals((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSave() {
    onSave?.(vals);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
<div className="w-full max-w-[700px] rounded-2xl bg-white p-6 shadow-2xl">
        {/* Header */}
<div className="flex items-start justify-between p-6">
             <h2 className="text-[17px] font-bold text-gray-800">
  Edit Family Details
</h2>

          <button
  onClick={onClose}
  className="text-gray-400 transition hover:text-gray-600"
>
  ✕
</button>
        </div>

        {/* Form */}
<div className="space-y-5">
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-gray-700">
                SL No
              </label>
              <input
                type="number"
                className="h-[44px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-gray-400"
                value={vals.slNo ?? ""}
                onChange={(e) =>
                  handleChange(
                    "slNo",
                    Number(e.target.value)
                  )
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-gray-700">
                Family Name
              </label>
              <input
                className="h-[44px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-gray-400"
                value={vals.familyName || ""}
                onChange={(e) =>
                  handleChange(
                    "familyName",
                    e.target.value
                  )
                }
              />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-[14px] font-semibold text-gray-700">
              Head of Family
            </label>
            <input
              className="h-[44px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-gray-400"
              value={vals.head || ""}
              onChange={(e) =>
                handleChange("head", e.target.value)
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-gray-700">
                Monthly Due
              </label>
              <input
                type="number"
                className="h-[44px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-gray-400"
                value={vals.monthlyDue ?? ""}
                onChange={(e) =>
                  handleChange(
                    "monthlyDue",
                    Number(e.target.value)
                  )
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-gray-700">
                Paid Monthly
              </label>
              <input
                type="number"
                className="h-[44px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-gray-400"
                value={vals.paidMonthly ?? ""}
                onChange={(e) =>
                  handleChange(
                    "paidMonthly",
                    Number(e.target.value)
                  )
                }
              />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-[14px] font-semibold text-gray-700">
              Monthly Status
            </label>

            <select
className="h-[44px] w-full rounded-xl bg-[#e4e4e4] px-3 text-[14px] text-gray-500 outline-none"              value={vals.monthlyStatus || ""}
              onChange={(e) =>
                handleChange(
                  "monthlyStatus",
                  e.target.value
                )
              }
            >
              <option value="Paid">Paid</option>
              <option value="Partial">Partial</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[14px] font-semibold text-gray-700">
              Other Dues
            </label>
            <input
              className="h-[44px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-gray-400"
              value={vals.otherDues || ""}
              onChange={(e) =>
                handleChange(
                  "otherDues",
                  e.target.value
                )
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-gray-700">
                Total Paid
              </label>
              <input
                type="number"
                className="h-[44px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-gray-400"
                value={vals.totalPaid ?? ""}
                onChange={(e) =>
                  handleChange(
                    "totalPaid",
                    Number(e.target.value)
                  )
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-gray-700">
                Total Due
              </label>
              <input
                type="number"
                className="h-[44px] w-full rounded-xl border border-gray-300 bg-white px-3 text-[14px] outline-none focus:border-gray-400"
                value={vals.totalDue ?? ""}
                onChange={(e) =>
                  handleChange(
                    "totalDue",
                    Number(e.target.value)
                  )
                }
              />
            </div>

          </div>

        </div>

        {/* Footer */}
<div className="mt-6 flex items-center gap-3">
          <button
            onClick={onClose}
className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-[14px] font-semibold text-gray-700 hover:bg-gray-50"          >
            Cancel
          </button>

          <button
            onClick={handleSave}
className="flex flex-1 items-center justify-center rounded-xl bg-gray-500 px-5 py-3 text-[14px] font-semibold text-white hover:bg-gray-600"          >
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditBtn;