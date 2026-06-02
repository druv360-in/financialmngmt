// =============================================
// Component 18 — Receipt Card (Stat Card)
// =============================================
// A small stat summary card.
// Called 4 times inside Receiptsmanagement (17)
// with different label/value/color props.
//
// Props:
//   label      (string) — e.g. "Total Receipts"
//   value      (string) — e.g. "3" or "₹4250.00"
//   valueColor (string) — optional color for value
//                         defaults to black
// =============================================

const DEMO_PROPS = {
  label: "Total Receipts",
  value: "3",
  valueColor: "#111",
};

export default function Receiptcard({ label, value, valueColor }) {
  const data = {
    label: label || DEMO_PROPS.label,
    value: value || DEMO_PROPS.value,
    valueColor: valueColor || DEMO_PROPS.valueColor,
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 min-w-40 flex-1 shadow-sm">
      <p className="text-xs font-medium text-gray-400 mb-2.5">{data.label}</p>
      <p className="text-2xl font-bold m-0" style={{ color: data.valueColor }}>
        {data.value}
      </p>
    </div>
  );
}