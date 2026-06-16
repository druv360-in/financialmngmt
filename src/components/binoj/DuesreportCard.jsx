import React from "react";
import { useNavigate } from "react-router-dom"; 


const buildingFundRows = [
  {
    sl: 1,
    family: "Johnson Family",
    person: "Robert Johnson",
    dueTitle: "Building Fund Contribution",
    dueDate: "30/06/2026",
    amount: "₹500.00",
    paid: "₹0.00",
    status: "Unpaid",
    statusTone: "unpaid",
  },
  {
    sl: 2,
    family: "Sharma Family",
    person: "Priya Sharma",
    dueTitle: "Building Fund Contribution",
    dueDate: "30/06/2026",
    amount: "₹500.00",
    paid: "₹500.00",
    status: "Paid",
    statusTone: "paid",
  },
  {
    sl: 3,
    family: "Smith Family",
    person: "David Smith",
    dueTitle: "Building Fund Contribution",
    dueDate: "30/06/2026",
    amount: "₹500.00",
    paid: "₹200.00",
    status: "Partially Paid",
    statusTone: "partial",
  },
];

const buildingFundSummary = {
  totalAmount: "₹1,500.00",
  totalPaid: "₹700.00",
  remaining: "₹800.00",
};

const churchFundRows = [
  {
    sl: 1,
    family: "Smith Family",
    person: "John Smith",
    dueTitle: "Annual Church Fund",
    dueDate: "31/12/2026",
    amount: "₹1,000.00",
    paid: "₹800.00",
    status: "Partial",
    statusTone: "partial",
  },
  {
    sl: 2,
    family: "Almeida Family",
    person: "Maria Almeida",
    dueTitle: "Annual Church Fund",
    dueDate: "31/12/2026",
    amount: "₹1,000.00",
    paid: "₹1,000.00",
    status: "Paid",
    statusTone: "paid",
  },
  {
    sl: 3,
    family: "Fernandes Family",
    person: "Kevin Fernandes",
    dueTitle: "Annual Church Fund",
    dueDate: "31/12/2026",
    amount: "₹1,000.00",
    paid: "₹0.00",
    status: "Unpaid",
    statusTone: "unpaid",
  },
];

const churchFundSummary = {
  totalAmount: "₹3,000.00",
  totalPaid: "₹1,800.00",
  remaining: "₹1,200.00",
};

const statusStyles = {
  paid: "bg-emerald-100 text-emerald-700",
  unpaid: "bg-red-100 text-red-700",
  partial: "bg-yellow-100 text-yellow-700",
};



export default function CatagoryreportCard() {
  const navigate = useNavigate();

  return (
   
    <div className="w-full min-w-0 space-y-6 sm:space-y-8 lg:pl-58 4k:space-y-14">
      
      {/* Main Page Header Layer */}
      <header className="border-b border-slate-200/60 pb-5 md:pb-6 4k:pb-10">
        <h1 className="text-xl sm:text-2xl 2xl:text-3xl 4k:text-5xl font-bold tracking-tight text-slate-950">
          Dues Report by Category
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm 2xl:text-base 4k:text-2xl font-medium text-slate-500">
          Track payment status for all dues across families
        </p>
      </header>
      
      {/* 1. Building Fund Block */}
      <div className="w-full min-w-0">
        <FundReportTableCard
          title="Building Fund"
          progress="1/3 Paid • ₹700.00/₹1,500.00"
          rows={buildingFundRows}
          summary={buildingFundSummary}
        />
      </div>

      {/* 2. Church Fund Block */}
      <div className="w-full min-w-0">
        <FundReportTableCard
          title="Church Fund"
          progress="1/3 Paid • ₹1,800.00/₹3,000.00"
          rows={churchFundRows}
          summary={churchFundSummary}
        />
      </div>

    </div>
  );
}


function FundReportTableCard({ title, progress, rows = [], summary }) {
  return (
    <section className="w-full rounded-xl border border-slate-200 bg-white p-4 sm:p-6 2xl:p-10 4k:p-16 shadow-sm transition-all box-border">
      
      {/* Table Sub-Header Context Area */}
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <h2 className="text-base sm:text-lg 2xl:text-2xl 4k:text-4xl font-semibold text-slate-950">
          {title}
        </h2>
        <p className="text-sm 2xl:text-base 4k:text-2xl text-slate-700">
          {progress}
        </p>
      </div>

      {/* Horizontal Scroll Box Container */}
      <div className="overflow-x-auto rounded-lg border border-slate-100 w-full bg-transparent">
        <table className="w-full min-w-[800px] xl:min-w-[1000px] 4k:min-w-[1600px] border-collapse text-left text-sm 2xl:text-base 4k:text-2xl">
          <thead>
            <tr className="bg-slate-50 text-slate-950">
              <th className="w-16 px-3 py-3 2xl:py-5 font-semibold text-left">SL</th>
              <th className="px-3 py-3 2xl:py-5 font-semibold text-left">Family</th>
              <th className="px-3 py-3 2xl:py-5 font-semibold text-left">Due Title</th>
              <th className="px-3 py-3 2xl:py-5 font-semibold text-left">Due Date</th>
              <th className="px-3 py-3 2xl:py-5 font-semibold text-right">Amount</th>
              <th className="px-3 py-3 2xl:py-5 font-semibold text-right">Paid</th>
              <th className="px-3 py-3 2xl:py-5 font-semibold text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const uniqueKey = row.sl || `row-${index}`;
              const badgeClass = `inline-flex min-w-16 items-center justify-center rounded px-2.5 py-1 text-xs 2xl:text-sm font-medium tracking-wide shadow-sm ${statusStyles[row.statusTone] || "bg-slate-100 text-slate-700"}`;

              return (
                <tr key={uniqueKey} className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="px-3 py-4 2xl:py-6 text-left align-top font-medium text-slate-400">
                    {row.sl}
                  </td>
                  <td className="px-3 py-4 2xl:py-6 text-left align-top">
                    <div className="font-semibold text-slate-950">{row.family}</div>
                    <div className="mt-1 text-xs 2xl:text-sm text-slate-500">{row.person}</div>
                  </td>
                  <td className="px-3 py-4 2xl:py-6 text-left align-top text-slate-700">
                    {row.dueTitle}
                  </td>
                  <td className="px-3 py-4 2xl:py-6 text-left align-top text-slate-600 whitespace-nowrap">
                    {row.dueDate}
                  </td>
                  <td className="px-3 py-4 2xl:py-6 text-right align-top font-semibold text-slate-950">
                    {row.amount}
                  </td>
                  <td className="px-3 py-4 2xl:py-6 text-right align-top font-semibold text-emerald-600">
                    {row.paid}
                  </td>
                  <td className="px-3 py-4 2xl:py-6 text-center align-top">
                    <span className={badgeClass}>
                      {row.statusTone === "unpaid" && (
                        <span className="mr-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-red-400 text-[10px] leading-none font-bold">
                          x
                        </span>
                      )}
                      {row.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Financial Aggregation Summary Metrics Footer */}
      <div className="mt-6 sm:mt-8 grid gap-4 rounded-xl bg-slate-50 px-4 py-5 2xl:p-8 4k:p-12 border border-slate-100 sm:grid-cols-3">
        <SummaryItem label="Total Amount" value={summary?.totalAmount} />
        <SummaryItem label="Total Paid" value={summary?.totalPaid} tone="paid" />
        <SummaryItem label="Remaining" value={summary?.remaining} tone="remaining" />
      </div>
    </section>
  );
}


function SummaryItem({ label, value = "₹0.00", tone = "default" }) {
  const valueClass =
    tone === "paid"
      ? "text-emerald-600"
      : tone === "remaining"
        ? "text-red-600"
        : "text-slate-950";

  return (
    <div>
      <div className="text-sm 2xl:text-base 4k:text-2xl font-medium text-slate-600">
        {label}
      </div>
      <div className={`mt-1 text-base sm:text-lg 2xl:text-2xl 4k:text-4xl font-bold tracking-tight ${valueClass}`}>
        {value}
      </div>
    </div>
  );
}