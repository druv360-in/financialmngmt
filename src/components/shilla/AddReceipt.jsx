import { useEffect, useRef, useState } from 'react';

const CATEGORIES = [
  'Tithes & Offerings',
  'Special Offerings',
  'Building Fund',
  'Mission Fund',
  'Monthly Collection',
  'Donations',
  'Other',
];

const PAYMENT_METHODS = [
  'Cash',
  'Check',
  'Bank Transfer',
  'Credit Card',
  'Online',
  'Other',
];

const PAYERS = [
  { label: 'John Smith (Smith Family)', value: 'john_smith' },
  { label: 'Robert Johnson (Johnson Family)', value: 'robert_johnson' },
  { label: 'Other (Custom Name)', value: 'other' },
];

const inputClass =
  'w-full px-3 py-2 border border-[#e5e7eb] bg-[#f9fafb] rounded-xl text-sm text-gray-900 placeholder-gray-400 transition outline-none focus:outline-none focus:border-gray-400 focus:bg-[#f3f4f6] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]';

const labelClass = 'block text-[14px] font-semibold text-black mb-1';

function Dropdown({
  value,
  onChange,
  placeholder,
  options,
  isObject = false,
  error = false,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const selectedLabel = isObject
    ? options.find(item => item.value === value)?.label
    : value;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${inputClass} ${
          error ? 'border-red-500' : ''
        } ${
          open ? 'border-gray-400 bg-[#f3f4f6] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]' : ''
        } flex items-center justify-between text-left h-[36px]`}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {selectedLabel || placeholder}
        </span>

        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
          {options.map((item, i) => {
            const optionValue = isObject ? item.value : item;
            const optionLabel = isObject ? item.label : item;

            return (
              <div
                key={i}
                onClick={() => {
                  onChange(optionValue);
                  setOpen(false);
                }}
                className={`px-3 py-2 text-sm cursor-pointer ${
                  value === optionValue ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                {optionLabel}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function AddReceipt({ onClose }) {
  const [form, setForm] = useState({
    title: '',
    payer: '',
    customPayer: '',
    primaryCategory: '',
    primaryAmount: '0.00',
    receiptDate: '',
    paymentMethod: '',
    description: '',
  });

  const [additionalCategories, setAdditionalCategories] = useState([]);
  const [additionalAmounts, setAdditionalAmounts] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.title.trim()) newErrors.title = true;
    if (!form.payer) newErrors.payer = true;
    if (!form.primaryCategory) newErrors.primaryCategory = true;
    if (!form.primaryAmount) newErrors.primaryAmount = true;
    if (!form.receiptDate) newErrors.receiptDate = true;
    if (!form.paymentMethod) newErrors.paymentMethod = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const toggleAdditional = category => {
    setAdditionalCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );

    if (!additionalAmounts[category]) {
      setAdditionalAmounts(prev => ({
        ...prev,
        [category]: '0.00',
      }));
    }
  };

  const additionalOptions = CATEGORIES.filter(
    item => item !== form.primaryCategory
  );

  const totalAmount =
    (parseFloat(form.primaryAmount) || 0) +
    additionalCategories.reduce(
      (sum, item) => sum + (parseFloat(additionalAmounts[item]) || 0),
      0
    );

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={e => e.target === e.currentTarget && onClose?.()}
    >
      {/* CARD - Form forced to precise 450px layout container matching the layout view */}
      <div className="bg-white rounded-2xl shadow-2xl w-[450px] p-5 flex flex-col max-h-[92vh]">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base text-[20px] font-semibold text-gray-950">
            Add New Receipt
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg p-1 transition"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto pr-0.5 flex-1 space-y-3.5">
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-0.5">
              <label className={labelClass}>
                Title <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g., Sunday Offering"
                className={`${inputClass} h-[36px] ${
                  errors.title ? 'border-red-500' : ''
                }`}
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className={labelClass}>
                Payer <span className="text-red-500">*</span>
              </label>

              <Dropdown
                value={form.payer}
                onChange={value => setForm({ ...form, payer: value })}
                placeholder="Select payer"
                options={PAYERS}
                isObject
                error={errors.payer}
              />

              {form.payer === 'other' && (
                <input
                  type="text"
                  name="customPayer"
                  value={form.customPayer}
                  onChange={handleChange}
                  placeholder="Enter custom name"
                  className={`${inputClass} mt-1 h-[36px]`}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <label className={labelClass}>
              Primary Category <span className="text-red-500">*</span>
            </label>

            <Dropdown
              value={form.primaryCategory}
              onChange={value => {
                setForm({
                  ...form,
                  primaryCategory: value,
                });

                setAdditionalCategories(prev =>
                  prev.filter(item => item !== value)
                );
              }}
              placeholder="Select primary category"
              options={CATEGORIES}
              error={errors.primaryCategory}
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <label className={labelClass}>
              Additional Categories (Optional)
            </label>

            <div className="border border-[#e5e7eb] rounded-xl p-3 bg-white space-y-2.5">
              {additionalOptions.map(category => {
                const checked = additionalCategories.includes(category);

                return (
                  <div key={category} className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-2.5 cursor-pointer py-0.5">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleAdditional(category)}
                        className="w-4 h-4 accent-black rounded border-gray-300 cursor-pointer"
                      />

                      <span className="text-xs text-blac font-semibold">
                        {category}
                      </span>
                    </label>

                    {checked && (
                      <div className="pl-6.5 pb-0.5">
                        <label className="block text-[10px] text-gray-400 mb-1">
                          Amount for {category} *
                        </label>

                        <input
                          type="number"
                          value={additionalAmounts[category] || '0.00'}
                          onChange={e =>
                            setAdditionalAmounts(prev => ({
                              ...prev,
                              [category]: e.target.value,
                            }))
                          }
                          className={`${inputClass} h-[32px] bg-white`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-0.5">
              <label className={labelClass}>Primary Category Amount *</label>

              <input
                type="number"
                name="primaryAmount"
                value={form.primaryAmount}
                onChange={handleChange}
                className={`${inputClass} h-[36px] ${
                  errors.primaryAmount ? 'border-red-500' : ''
                }`}
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className={labelClass}>Receipt Date *</label>

              <input
                type="date"
                name="receiptDate"
                value={form.receiptDate}
                onChange={handleChange}
                className={`${inputClass} h-[36px] ${
                  errors.receiptDate ? 'border-red-500' : ''
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <label className={labelClass}>Payment Method *</label>

            <Dropdown
              value={form.paymentMethod}
              onChange={value =>
                setForm({
                  ...form,
                  paymentMethod: value,
                })
              }
              placeholder="Select payment method"
              options={PAYMENT_METHODS}
              error={errors.paymentMethod}
            />
          </div>

          {form.primaryCategory && (
            <div className="bg-purple-50 rounded-xl px-3 py-2 text-[11px] space-y-1">
              <div className="flex justify-between">
                <span className="text-purple-600 font-bold">
                  Receipt Summary
                </span>

                <span className="text-purple-400">Breakdown</span>
              </div>

              <div className="flex justify-between">
                <span className="text-purple-400">{form.primaryCategory}:</span>

                <span className="text-purple-600">
                  ₹{parseFloat(form.primaryAmount || 0).toFixed(2)}
                </span>
              </div>

              {additionalCategories.map(category => (
                <div key={category} className="flex justify-between">
                  <span className="text-purple-400">{category}:</span>

                  <span className="text-purple-600">
                    ₹{parseFloat(additionalAmounts[category] || 0).toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="flex justify-between border-t border-purple-200 pt-1 mt-1 font-bold">
                <span className="text-purple-500">Total Amount:</span>

                <span className="text-purple-700">
                  ₹{totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-0.5">
            <label className={labelClass}>Description</label>

            <textarea
              rows={2}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Additional notes..."
              className={`${inputClass} resize-none py-1.5`}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-4 pt-3 border-t border-gray-100">
          <button
            type="button"
            onClick={() => {
              if (validateForm()) {
                alert('Added New Receipt Successfully!');
              }
            }}
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold rounded-xl py-2 transition"
          >
            Add Receipt
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}