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
    <div style={{
      backgroundColor: t.bg,
      border: `1.5px solid ${t.border}`,
      borderRadius: "10px",
      width:"220px",
      
      padding: "16px 18px",
      fontFamily: "'Segoe UI', sans-serif",
      boxSizing: "border-box",
      display: "inline-block",
      minWidth: "180px",
    }}>
      <p style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "600", color: t.labelColor }}>
        {label}
      </p>
      <p style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: t.valueColor, lineHeight: 1.1 }}>
        ₹{typeof value === "number" ? value.toFixed(2) : value}
      </p>
    </div>
  );
}