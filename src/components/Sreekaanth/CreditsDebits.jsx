import React from "react";

const CreditsDebits = ({ filters }) => {
  const creditRows = [
    { sl: "-", particular: "Opening Cash Balance", amount: 0.0, show: filters?.includeOpeningCash !== false },
    { sl: "-", particular: "Opening Bank Balance", amount: 0.0, show: filters?.includeOpeningBank !== false },
  ];

  const debitRows = [];

  const totalCredits = creditRows.filter((r) => r.show).reduce((sum, r) => sum + r.amount, 0);
  const totalDebits = debitRows.reduce((sum, r) => sum + r.amount, 0);
  const surplus = totalCredits - totalDebits;
  const fmt = (v) => `₹${v.toFixed(2)}`;
  const visibleCredits = creditRows.filter((r) => r.show);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
      {/* Title */}
      <h2 className="text-[16px] font-bold text-gray-900 mb-5">Credits &amp; Debits Statement</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">

          {/* ── Column headers ── */}
          <thead>
            <tr className="border-b border-gray-200 bg-gray-100 w-full">
              <th className="text-left text-[13px] font-bold text-gray-700 py-2.5 pr-4 w-14">SL No</th>
              <th className="text-left text-[13px] font-bold text-gray-700 py-2.5 pr-4">Credits Particulars</th>
              <th className="text-right text-[13px] font-bold text-gray-700 py-2.5 pr-8">Amount (₹)</th>
              <th className="text-left text-[13px] font-bold text-gray-700 py-2.5 pr-4 w-14">SL No</th>
              <th className="text-left text-[13px] font-bold text-gray-700 py-2.5 pr-4">Debits Particulars</th>
              <th className="text-right text-[13px] font-bold text-gray-700 py-2.5">Amount (₹)</th>
            </tr>
          </thead>

          <tbody>
            {/* ── Data rows — light blue background ── */}
            {Array.from({ length: Math.max(visibleCredits.length, debitRows.length) }).map((_, i) => {
              const cr = visibleCredits[i];
              const dr = debitRows[i];
              return (
                <tr key={i} className="bg-blue-50 border-b border-blue-50">
                  {/* Credit side */}
                  <td className="py-2.5 pr-4 text-[13px] font-bold text-gray-500 text-center">{cr ? cr.sl : ""}</td>
                  <td className="py-2.5 pr-4 text-[13px]">
                    {cr && <span className="text-blue-500 font-bold">{cr.particular}</span>}
                  </td>
                  <td className="py-2.5 pr-8 text-right text-[13px]">
                    {cr && <span className="text-blue-500 font-bold">{fmt(cr.amount)}</span>}
                  </td>
                  {/* Debit side */}
                  <td className="py-2.5 pr-4 text-[13px] font-bold text-gray-500 text-center">{dr ? dr.sl : ""}</td>
                  <td className="py-2.5 pr-4 text-[13px] font-bold text-gray-700">{dr ? dr.particular : ""}</td>
                  <td className="py-2.5 text-right text-[13px] font-bold text-red-500">{dr ? fmt(dr.amount) : ""}</td>
                </tr>
              );
            })}

            {/* ── Totals row ── */}
            <tr className="border-b border-gray-200 bg-gray-100 w-full">
              <td colSpan={2} className="py-3 pr-4 text-right text-[13px] font-bold text-gray-800">
                Total Credits:
              </td>
              <td className="py-3 pr-8 text-right text-[13px] font-bold text-green-600">
                {fmt(totalCredits)}
              </td>
              <td colSpan={2} className="py-3 pr-4 text-right text-[13px] font-bold text-gray-800">
                Total Debits:
              </td>
              <td className="py-3 text-right text-[13px] font-bold text-red-500">
                {fmt(totalDebits)}
              </td>
            </tr>

            {/* ── Current Cash / Bank row ── */}
            <tr className="bg-green-50">
              <td colSpan={2} className="py-2.5 pr-4 text-right text-[13px] font-bold text-green-700">
                Current Cash in Hand:
              </td>
              <td className="py-2.5 pr-8 text-right text-[13px] font-bold text-gray-900">
                {fmt(0)}
              </td>
              <td colSpan={2} className="py-2.5 pr-4 text-right text-[13px] font-bold text-blue-700">
                Current Bank Balance:
              </td>
              <td className="py-2.5 text-right text-[13px] font-bold text-gray-900">
                {fmt(0)}
              </td>
            </tr>

            {/* ── Books Balanced row ── */}
            <tr className="bg-green-100">
              <td colSpan={5} className="py-3 pr-4 text-right text-[13px] font-bold text-gray-800">
                ✓ Books Balanced
              </td>
              <td className="py-3 text-right text-[13px] font-bold text-green-900">
                {fmt(surplus)} (Surplus)
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreditsDebits;