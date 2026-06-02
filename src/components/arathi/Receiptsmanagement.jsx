import Receiptcard from "./Receiptcard";

// =============================================
// Component 17 — Receipts Management
// =============================================
// Main receipts section header + stat cards.
// Calls <Receiptcard /> 5 times for stat cards:
//   1. Total Receipts
//   2. Total Income
//   3. Average Receipt
//   4. Categories
//   5. Overdue
//
// Props:
//   onAddReceipt (func) — called when Add Receipt is clicked
// =============================================

const SAMPLE_RECEIPTS = [
  {
    id: "RCP1000",
    category: "Tithes & Offerings",
    amount: 2500,
    overdue: false,
  },
  {
    id: "RCP1001",
    category: "Special Offerings",
    amount: 1000,
    overdue: true,
  },
  {
    id: "RCP1002",
    category: "Monthly Collection",
    amount: 750,
    overdue: false,
  },
  {
    id: "RCP1003",
    category: "Special Offerings",
    amount: 1500,
    overdue: true,
  },
];

export default function Receiptsmanagement({ onAddReceipt }) {
  // ── Derived stats ────────────────────────────────
  const totalReceipts = SAMPLE_RECEIPTS.length;
  const totalIncome = SAMPLE_RECEIPTS.reduce((sum, r) => sum + r.amount, 0);
  const averageReceipt = totalReceipts > 0 ? totalIncome / totalReceipts : 0;
  const categories = [...new Set(SAMPLE_RECEIPTS.map((r) => r.category))].length;
  const overdue = SAMPLE_RECEIPTS.filter((r) => r.overdue).length;

  const fmt = (val) =>
    `₹${Number(val).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <div className="bg-gray-50 min-h-screen px-8 py-7 box-border font-sans">

      {/* ── Header ── */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 m-0 mb-1">
            Receipts Management
          </h1>
          <p className="text-sm text-gray-400 m-0">
            Track and manage church income
          </p>
        </div>

        <button
          className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition-colors shrink-0"
          onClick={onAddReceipt}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Receipt
        </button>
      </div>

      {/* ── 5 × Receiptcard (Component 18) ── */}
      <div className="flex gap-4">
        <Receiptcard
          label="Total Receipts"
          value={String(totalReceipts)}
          valueColor="#111"
        />
        <Receiptcard
          label="Total Income"
          value={fmt(totalIncome)}
          valueColor="#2e7d32"
        />
        <Receiptcard
          label="Average Receipt"
          value={fmt(averageReceipt)}
          valueColor="#2e7d32"
        />
        <Receiptcard
          label="Categories"
          value={String(categories)}
          valueColor="#111"
        />
        <Receiptcard
          label="Overdue"
          value={String(overdue)}
          valueColor="#c0392b"
        />
      </div>

    </div>
  );
}