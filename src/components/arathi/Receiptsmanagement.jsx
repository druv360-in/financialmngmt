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


export default function Receiptsmanagement({ receipts,onAddReceipt }) {
  // ── Derived stats ────────────────────────────────
  const totalReceipts = receipts.length;
  const totalIncome =  receipts.reduce((sum, r) => sum + r.amount, 0);
  const averageReceipt = totalReceipts > 0 ? totalIncome / totalReceipts : 0;
 const categories = [
  ...new Set(
    receipts.map(
      (r) => r.categories?.[0]?.category
    )
  ),
].filter(Boolean).length;
  const overdue =  receipts.filter((r) => r.overdue).length;

  const fmt = (val) =>
    `₹${Number(val).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <div className="bg-gray-50  py-7 box-border font-sans">

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
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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