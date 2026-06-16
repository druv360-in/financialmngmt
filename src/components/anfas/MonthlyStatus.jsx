// MonthlyStatus — Component 68
// Displays ONE summary card. Pass label/value/variant to customise.
// Props: label, value, variant ("green"|"red"|"blue"|"purple")

const VARIANTS = {
  green:  { bg: "#f0fdf4", border: "#bbf7d0", labelColor: "#15803d", valueColor: "#16a34a" },
  red:    { bg: "#fff5f5", border: "#fecaca", labelColor: "#b91c1c", valueColor: "#dc2626" },
  blue:   { bg: "#eff6ff", border: "#bfdbfe", labelColor: "#1d4ed8", valueColor: "#2563eb" },
  purple: { bg: "#f5f3ff", border: "#ddd6fe", labelColor: "#6d28d9", valueColor: "#7c3aed" },
};

export default function MonthlyStatus({
  label   = "Total Receipts",
  value   = 0,
  variant = "green",
}) {
  const t = VARIANTS[variant] || VARIANTS.green;

  return (
    <>
      <style>{`
        .ms-card {
          background-color: var(--ms-bg);
          border: 1.5px solid var(--ms-border);
          border-radius: 10px;
          padding: 16px 18px;
          font-family: 'Segoe UI', sans-serif;
          box-sizing: border-box;
          display: inline-block;
          width: 220px;
          min-width: 160px;
        }
        .ms-label {
          margin: 0 0 8px 0;
          font-size: 12px;
          font-weight: 600;
        }
        .ms-value {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.1;
        }
        @media (max-width: 768px) {
          .ms-card { width: 180px; min-width: 140px; padding: 13px 14px; }
          .ms-value { font-size: 19px; }
        }
        @media (max-width: 480px) {
          .ms-card { width: 100%; min-width: unset; display: block; }
          .ms-value { font-size: 18px; }
          .ms-label { font-size: 11px; }
        }
      `}</style>

      <div
        className="ms-card"
        style={{
          backgroundColor: t.bg,
          border: `1.5px solid ${t.border}`,
        }}
      >
        <p className="ms-label" style={{ color: t.labelColor }}>{label}</p>
        <p className="ms-value" style={{ color: t.valueColor }}>
          ₹{typeof value === "number" ? value.toFixed(2) : value}
        </p>
      </div>
    </>
  );
}