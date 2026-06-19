import { useState } from "react";
import Icon from "./Icon";

export default function SettingCard({ icon, title, children }) {
  return (
    <section className="rounded-[14px] border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.03)] sm:p-6 2xl:p-7">
      <div className="mb-6 flex items-center gap-2.5">
        {icon}
        <h2 className="text-base font-bold text-slate-950 2xl:text-lg">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

export function SettingsField({
  label,
  helper,
  value,
  onChange,
  type = "text",
  inputMode,
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-slate-950">
        {label}
      </span>
      <input
        type={type}
        value={value}
        inputMode={inputMode}
        onChange={(event) => onChange(event.target.value)}
        className="h-9 w-full rounded-lg border-0 bg-slate-100 px-3 text-sm text-slate-950 outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-blue-500 2xl:h-10 2xl:text-base"
      />
      <span className="mt-2 block text-xs text-slate-500 2xl:text-sm">
        {helper}
      </span>
    </label>
  );
}

export function PreviewBanner({ color = "blue", label, children }) {
  const palette = {
    blue: "bg-blue-50 text-blue-950",
    orange: "bg-orange-50 text-orange-950",
    green: "bg-emerald-50 text-emerald-950",
  };

  return (
    <div className={`rounded-lg px-3 py-3 text-sm ${palette[color]}`}>
      <span className="font-bold">{label}</span> {children}
    </div>
  );
}

const NOTES = [
  "Receipt numbers are auto-generated when creating new receipts",
  'Voucher numbers are auto-generated for bills marked as "Voucher" type',
  "Update these numbers to match your existing numbering system",
  "Numbers increment automatically with each new entry",
  "Opening balances are carried forward from previous financial year",
];

export function ImportantNotes() {
  return (
    <section className="rounded-[14px] border border-yellow-300 bg-yellow-50 px-5 py-5 text-amber-800 sm:px-6 2xl:px-7">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-yellow-200 text-blue-600">
          <Icon
            size={16}
            d="M12 16v-4 M12 8h.01 M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"
          />
        </div>

        <div>
          <h2 className="text-sm font-bold">Important Notes:</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
            {NOTES.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
