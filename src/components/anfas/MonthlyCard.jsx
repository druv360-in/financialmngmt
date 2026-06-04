// MonthlyCard — Component 67
// Displays 4 summary cards in a row.
// Props: totalReceipts, totalBills, finalCash, finalBank

export default function MonthlyCard({
  totalReceipts = 0,
  totalBills    = 0,
  finalCash     = 0,
  finalBank     = 0,
}) {
  const cards = [
    { label: "Total Receipts",     value: totalReceipts, labelColor: "#15803d", valueColor: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
    { label: "Total Bills",        value: totalBills,    labelColor: "#b91c1c", valueColor: "#dc2626", bg: "#fff5f5", border: "#fecaca" },
    { label: "Final Cash in Hand", value: finalCash,     labelColor: "#1d4ed8", valueColor: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
    { label: "Final Bank Balance", value: finalBank,     labelColor: "#6d28d9", valueColor: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "12px",
      width: "100%",
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      {cards.map((c) => (
        <div key={c.label} style={{
          backgroundColor: c.bg,
          border: `1.5px solid ${c.border}`,
          borderRadius: "10px",
          padding: "16px 18px",
          boxSizing: "border-box",
        }}>
          <p style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "600", color: c.labelColor }}>
            {c.label}
          </p>
          <p style={{ margin: 0, fontSize: "22px", fontWeight: "700", color: c.valueColor, lineHeight: 1.1 }}>
            ₹{c.value.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}