// MonthlyLedger — Component 66
// Props:
//   month                string
//   transactions         Array<{ date, receiptNo, voucherNo, particulars,
//                                cashAmount (+receipt/-bill), bankAmount (+receipt/-bill) }>
//   openingCashBalance   number
//   openingBankBalance   number



export default function MonthlyLedger({
  month = "April 2026",
  transactions = [],
  openingCashBalance = 0,
  openingBankBalance = 0,
}) {
  // ── Compute all totals from signed amounts ──────────────
  const totalReceiptCash = transactions
    .filter((t) => t.cashAmount != null && t.cashAmount > 0)
    .reduce((s, t) => s + t.cashAmount, 0);

  const totalReceiptBank = transactions
    .filter((t) => t.bankAmount != null && t.bankAmount > 0)
    .reduce((s, t) => s + t.bankAmount, 0);

  // totals used only for Monthly Totals row in table

  return (
    <div style={s.tableCard}>

        <div style={s.header}>
          <span style={s.monthLabel}>{month} – Journal</span>
          <span style={s.txCount}>{transactions.length} transactions</span>
        </div>

        <div style={s.tableScroll}>
          <table style={s.table}>
            <thead>
              <tr style={s.headRow}>
                <th style={s.th}>Date</th>
                <th style={s.th}>Receipt No</th>
                <th style={s.th}>Voucher No</th>
                <th style={{ ...s.th, minWidth: "260px" }}>Particulars</th>
                <th style={{ ...s.th, textAlign: "right" }}>Receipt Cash</th>
                <th style={{ ...s.th, textAlign: "right" }}>Receipt Bank</th>
              </tr>
            </thead>

            <tbody>
              {/* Opening Balance */}
              <tr style={s.headRow}>
                <td colSpan={4} style={s.sectionCell}>Opening Balance</td>
                <td style={{ ...s.sectionCell, textAlign: "right", color: "#2563eb" }}>
                  {openingCashBalance > 0 ? `₹${openingCashBalance.toFixed(2)}` : "–"}
                </td>
                <td style={{ ...s.sectionCell, textAlign: "right", color: "#16a34a" }}>
                  {openingBankBalance > 0 ? `₹${openingBankBalance.toFixed(2)}` : "–"}
                </td>
              </tr>

              {transactions.length === 0 && (
                <tr>
                  <td colSpan={6} style={s.emptyCell}>No transactions for this month.</td>
                </tr>
              )}

              {transactions.map((row, i) => (
                <tr key={i} style={s.dataRow}>
                  <td style={s.td}>{row.date}</td>

                  <td style={s.td}>
                    {row.receiptNo && <span style={s.receiptTag}>{row.receiptNo}</span>}
                  </td>

                  <td style={s.td}>
                    {row.voucherNo && <span style={s.voucherTag}>{row.voucherNo}</span>}
                  </td>

                  <td style={s.td}>{row.particulars}</td>

                  <td style={{
                    ...s.td, textAlign: "right",
                    color: row.cashAmount > 0 ? "#2563eb"
                         : row.cashAmount < 0 ? "#dc2626" : "inherit",
                  }}>
                    {row.cashAmount != null && row.cashAmount !== 0
                      ? `₹${Math.abs(row.cashAmount).toFixed(2)}` : ""}
                  </td>

                  <td style={{
                    ...s.td, textAlign: "right",
                    color: row.bankAmount > 0 ? "#16a34a"
                         : row.bankAmount < 0 ? "#dc2626" : "inherit",
                  }}>
                    {row.bankAmount != null && row.bankAmount !== 0
                      ? `₹${Math.abs(row.bankAmount).toFixed(2)}` : ""}
                  </td>
                </tr>
              ))}

              {/* Monthly Totals */}
              <tr style={s.totalRow}>
                <td colSpan={4} style={s.totalLabel}>Monthly Totals</td>
                <td style={{ ...s.totalCell, color: "#2563eb" }}>
                  ₹{totalReceiptCash.toFixed(2)}
                </td>
                <td style={{ ...s.totalCell, color: "#16a34a" }}>
                  ₹{totalReceiptBank.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}

const s = {
  tableCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    overflow: "hidden",
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px",
    borderBottom: "1px solid #e2e8f0",
    fontFamily: "'Segoe UI', sans-serif"
  },
  monthLabel: { fontSize: "15px", fontWeight: "700", color: "#1a202c" },
  txCount:    { fontSize: "12px", color: "#718096" },
  tableScroll: { overflowX: "auto", width: "100%" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "13.5px",fontFamily: "'Segoe UI', sans-serif" },
  headRow: { backgroundColor: "#f7fafc", borderBottom: "1px solid #e2e8f0" },
  th: {
    padding: "10px 16px",
    fontWeight: "700",
    color: "#4a5568",
    textAlign: "left",
    whiteSpace: "nowrap",
  },
  sectionCell: {
    padding: "10px 16px",
    fontWeight: "700",
    fontSize: "13px",
    color: "#2d3748",
    backgroundColor: "#f7fafc",
    borderBottom: "1px solid #e2e8f0",
  },
  emptyCell: {
    padding: "24px 16px",
    textAlign: "center",
    color: "#9ca3af",
    fontSize: "13px",
  },
  dataRow:  { borderBottom: "1px solid #f0f4f8" },
  td:       { padding: "11px 16px", color: "#4a5568", whiteSpace: "nowrap" },
  receiptTag: { color: "#2563eb", fontWeight: "600" },
  voucherTag: { color: "#d97706", fontWeight: "600" },
  totalRow:  { borderTop: "2px solid #e2e8f0", backgroundColor: "#f7fafc" },
  totalLabel: { padding: "11px 16px", fontWeight: "700", color: "#1a202c", fontSize: "13.5px" },
  totalCell:  { padding: "11px 16px", fontWeight: "700", fontSize: "13.5px", textAlign: "right" },
};