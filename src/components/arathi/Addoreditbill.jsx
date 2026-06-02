import { useState, useEffect } from "react";

const BILL_TYPE_OPTIONS = [
  "Voucher (System Generated)",
  "Bill (From Institution)",
];

const CATEGORY_OPTIONS = [
  "Utilities",
  "Maintenance",
  "Salaries",
  "Supplies",
  "Other",
];

const STATUS_OPTIONS = ["Pending", "Paid", "Overdue"];

const initialForm = {
  billType: "Voucher (System Generated)",
  title: "",
  vendor: "",
  amount: "",
  dueDate: "",
  category: "",
  status: "Pending",
  description: "",
};

const DEMO_BILL = {
  id: "VCH001",
  billType: "Voucher (System Generated)",
  title: "Electricity Bill",
  vendor: "Power Company",
  amount: "450",
  dueDate: "2026-04-25",
  category: "Utilities",
  status: "Pending",
  description: "Monthly electricity for church building",
};

export default function Addoreditbill({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  onSubmit: externalOnSubmit,
  billData: externalBillData,
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [internalMode, setInternalMode] = useState("add");

  const isControlled = externalIsOpen !== undefined;
  const isOpen = isControlled ? externalIsOpen : internalIsOpen;
  const billData = isControlled
    ? externalBillData
    : internalMode === "edit"
    ? DEMO_BILL
    : null;

  const handleClose = () => {
    if (isControlled) {
      externalOnClose && externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const handleSubmit = (data) => {
    if (isControlled) {
      externalOnSubmit && externalOnSubmit(data);
    } else {
      console.log("Bill submitted:", data);
    }
  };

  const isEditMode = Boolean(billData);

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditMode && billData) {
      setForm({
        billType: billData.billType || "Voucher (System Generated)",
        title: billData.title || "",
        vendor: billData.vendor || "",
        amount: billData.amount || "",
        dueDate: billData.dueDate || "",
        category: billData.category || "",
        status: billData.status || "Pending",
        description: billData.description || "",
      });
    } else {
      setForm(initialForm);
    }
    setErrors({});
  }, [billData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.vendor.trim()) newErrors.vendor = "Vendor is required";
    if (!form.amount || isNaN(form.amount) || Number(form.amount) < 0)
      newErrors.amount = "Valid amount is required";
    if (!form.dueDate) newErrors.dueDate = "Due date is required";
    if (!form.category) newErrors.category = "Category is required";
    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const mode = isEditMode ? "edit" : "add";
    handleSubmit({ ...form, id: billData?.id });
    handleClose();
    showToast(mode);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  // ── Toast state ─────────────────────────────────
  const [toast, setToast] = useState(null);

  const showToast = (type) => {
    setToast(type);
    setTimeout(() => setToast(null), 3000);
  };

  // ── Per-select open state (for chevron flip) ────
  const [openSelect, setOpenSelect] = useState(null);

  const handleSelectFocus = (name) => setOpenSelect(name);
  const handleSelectBlur  = ()     => setOpenSelect(null);

  const inputBase =
    "w-full px-3 py-2 border rounded-lg text-sm text-gray-900 bg-gray-50 outline-none box-border";
  const inputNormal = "border-gray-300 focus:border-gray-500";
  const inputErr = "border-red-500";
  const selectBase =
    "w-full px-3 py-2 pr-9 border rounded-lg text-sm text-gray-900 bg-gray-50 outline-none appearance-none cursor-pointer";

  const Chevron = ({ name }) => (
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
      {openSelect === name ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      )}
    </span>
  );

  return (
    <>
      {/* ── Demo trigger buttons ── */}
      {!isControlled && (
        <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-gray-200">
          <span className="text-xs text-gray-500 mr-1">Add/Edit Bill:</span>
          <button
            className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => { setInternalMode("add"); setInternalIsOpen(true); }}
          >
            + Add Bill
          </button>
          <button
            className="px-4 py-2 bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
            onClick={() => { setInternalMode("edit"); setInternalIsOpen(true); }}
          >
            ✏ Edit Bill
          </button>
        </div>
      )}

      {/* ── Modal ── */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto p-7 relative shadow-2xl">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold text-gray-900">
                {isEditMode ? "Edit Bill" : "Add New Bill"}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-800 text-xl leading-none px-2 py-0.5 rounded"
                onClick={handleClose}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} noValidate>
              {/* Bill Type */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Bill Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select name="billType" value={form.billType} onChange={handleChange}
                    onFocus={() => handleSelectFocus("billType")} onBlur={handleSelectBlur}
                    className={`${selectBase} border-gray-300 focus:border-gray-500`}>
                    {BILL_TYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <Chevron name="billType" />
                </div>
                {form.billType === "Voucher (System Generated)" && (
                  <p className="text-xs text-gray-400 mt-1">Voucher number will be auto-generated</p>
                )}
              </div>

              {/* Title */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Title <span className="text-red-500">*</span>
                </label>
                <input type="text" name="title" value={form.title} onChange={handleChange}
                  placeholder="e.g., Electricity Bill"
                  className={`${inputBase} ${errors.title ? inputErr : inputNormal}`} />
                {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
              </div>

              {/* Vendor */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Vendor <span className="text-red-500">*</span>
                </label>
                <input type="text" name="vendor" value={form.vendor} onChange={handleChange}
                  placeholder="e.g., Power Company"
                  className={`${inputBase} ${errors.vendor ? inputErr : inputNormal}`} />
                {errors.vendor && <p className="text-xs text-red-500 mt-1">{errors.vendor}</p>}
              </div>

              {/* Amount */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Amount <span className="text-red-500">*</span>
                </label>
                <input type="number" name="amount" value={form.amount} onChange={handleChange}
                  placeholder="0.00" min="0" step="0.01"
                  className={`${inputBase} ${errors.amount ? inputErr : inputNormal}`} />
                {errors.amount && <p className="text-xs text-red-500 mt-1">{errors.amount}</p>}
              </div>

              {/* Due Date */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Due Date <span className="text-red-500">*</span>
                </label>
                <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange}
                  className={`${inputBase} ${errors.dueDate ? inputErr : inputNormal}`} />
                {errors.dueDate && <p className="text-xs text-red-500 mt-1">{errors.dueDate}</p>}
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Category <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select name="category" value={form.category} onChange={handleChange}
                    onFocus={() => handleSelectFocus("category")} onBlur={handleSelectBlur}
                    className={`${selectBase} ${errors.category ? "border-red-500" : "border-gray-300 focus:border-gray-500"}`}>
                    <option value="">Select category</option>
                    {CATEGORY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <Chevron name="category" />
                </div>
                {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category}</p>}
              </div>

              {/* Status */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">Status</label>
                <div className="relative">
                  <select name="status" value={form.status} onChange={handleChange}
                    onFocus={() => handleSelectFocus("status")} onBlur={handleSelectBlur}
                    className={`${selectBase} border-gray-300 focus:border-gray-500`}>
                    {STATUS_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <Chevron name="status" />
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-800 mb-1.5">Description</label>
                <textarea name="description" value={form.description} onChange={handleChange}
                  placeholder="Additional notes..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-gray-50 outline-none resize-y min-h-20 font-[inherit] focus:border-gray-500 box-border" />
              </div>

              {/* Footer */}
              <div className="flex gap-2.5 mt-6">
                <button type="submit"
                  className="flex-1 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                  {isEditMode ? "Update Bill" : "Add Bill"}
                </button>
                <button type="button"
                  className="px-5 py-2.5 bg-transparent text-gray-600 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
                  onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Toast notification — white card style (matches screenshot) ── */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-xl border border-gray-100 text-gray-900 text-sm font-semibold min-w-[220px]">
          {/* Dark checkmark circle */}
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-900 shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          {toast === "add" ? "Bill added successfully" : "Bill updated successfully"}
        </div>
      )}
    </>
  );
}