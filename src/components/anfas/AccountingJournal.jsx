import { useState } from "react";
import MonthlyLedger from "../Anfas/MonthlyLedger";
import MonthlyCard from "../Anfas/MonthlyCard";

const SAMPLE_DATA = {
  "April 2026": {
    openingCashBalance: 0,
    openingBankBalance: 0,
    transactions: [
      { date: "Apr 13", receiptNo: "RCP1000", voucherNo: null,        particulars: "Sunday Offering - Congregation (Tithes & Offerings)",       cashAmount: 2500.0,  bankAmount: null   },
      { date: "Apr 14", receiptNo: "RCP1001", voucherNo: null,        particulars: "Building Fund Donation - John Smith (Special Offerings)",    cashAmount: null,    bankAmount: 1000.0 },
      { date: "Apr 15", receiptNo: "RCP1002", voucherNo: null,        particulars: "Monthly Collection - John Smith (Monthly Collection)",       cashAmount: 750.0,   bankAmount: null   },
      { date: "Apr 20", receiptNo: null,      voucherNo: "BILL12345", particulars: "Water Service - City Water Department (Utilities)",          cashAmount: null,    bankAmount: -120.5 },
    ],
  },
  "March 2026": {
    openingCashBalance: 500,
    openingBankBalance: 200,
    transactions: [
      { date: "Mar 5",  receiptNo: "RCP0990", voucherNo: null,       particulars: "Sunday Offering - Congregation (Tithes & Offerings)", cashAmount: 3000.0,  bankAmount: null   },
      { date: "Mar 18", receiptNo: null,      voucherNo: "BILL0091", particulars: "Electricity Bill - Power Corp (Utilities)",           cashAmount: -200.0,  bankAmount: null   },
    ],
  },
};

const MONTHS = Object.keys(SAMPLE_DATA);

export default function AccountingJournal() {
  const [selectedMonth, setSelectedMonth] = useState(MONTHS[0]);

  const monthData = SAMPLE_DATA[selectedMonth] || {
    openingCashBalance: 0,
    openingBankBalance: 0,
    transactions: [],
  };

  // ── Compute totals for MonthlyCard ───────────────────────
  const txns = monthData.transactions;

  const totalReceiptCash = txns.filter(t => t.cashAmount > 0).reduce((s, t) => s + t.cashAmount, 0);
  const totalReceiptBank = txns.filter(t => t.bankAmount > 0).reduce((s, t) => s + t.bankAmount, 0);
  const totalBillsCash   = txns.filter(t => t.cashAmount < 0).reduce((s, t) => s + Math.abs(t.cashAmount), 0);
  const totalBillsBank   = txns.filter(t => t.bankAmount < 0).reduce((s, t) => s + Math.abs(t.bankAmount), 0);

  const totalReceipts = totalReceiptCash + totalReceiptBank;
  const totalBills    = totalBillsCash + totalBillsBank;
  const finalCash     = monthData.openingCashBalance + totalReceiptCash - totalBillsCash;
  const finalBank     = monthData.openingBankBalance + totalReceiptBank - totalBillsBank;

  return (
    <div style={styles.page}>

      {/* ── Page Header ── */}
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.title}>Accounting Journal Ledger</h1>
          <p style={styles.subtitle}>
            Daily income and expense tracking with cash and bank separation
          </p>
        </div>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          style={styles.dropdown}
        >
          {MONTHS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* ── Monthly Ledger Table (66) ── */}
      <MonthlyLedger
        month={selectedMonth}
        transactions={monthData.transactions}
        openingCashBalance={monthData.openingCashBalance}
        openingBankBalance={monthData.openingBankBalance}
      />

      {/* ── Monthly Card (67) — 4 summary cards ── */}
      <MonthlyCard
        totalReceipts={totalReceipts}
        totalBills={totalBills}
        finalCash={finalCash}
        finalBank={finalBank}
      />

    </div>
  );
}

const styles = {
  page: {
    flex: 1,
    padding: "28px 32px",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "12px",
  },
  title:    { fontSize: "22px", fontWeight: "700", color: "#1a202c", margin: "0 0 4px 0" },
  subtitle: { fontSize: "13px", color: "#718096", margin: 0 },
  dropdown: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1a202c",
    border: "1.5px solid #e2e8f0",
    borderRadius: "7px",
    padding: "8px 14px",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    outline: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  },
};