import { useState } from "react";
import Icon from "./Icon";
import SettingCard, { PreviewBanner, SettingsField } from "./SettingCard";

function formatAmount(value) {
  const amount = Number(value || 0);
  return amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function FinancialYearSetting({
  financialYearStart,
  setFinancialYearStart,
  openingCashBalance,
  setOpeningCashBalance,
  openingBankBalance,
  setOpeningBankBalance,
}) {
  return (
    <SettingCard
      title="Financial Year Settings"
      icon={<Icon name="settings" size={20} className="text-emerald-600" />}
    >
      <div className="grid gap-4 md:grid-cols-3 md:gap-4 2xl:gap-6">
        <SettingsField
          type="date"
          label="Financial Year Start Date"
          value={financialYearStart}
          onChange={setFinancialYearStart}
          helper="Start date of current financial year"
        />
        <SettingsField
          label="Opening Cash Balance (₹)"
          value={openingCashBalance}
          onChange={setOpeningCashBalance}
          inputMode="decimal"
          helper="Cash in hand from previous year"
        />
        <SettingsField
          label="Opening Bank Balance (₹)"
          value={openingBankBalance}
          onChange={setOpeningBankBalance}
          inputMode="decimal"
          helper="Bank balance from previous year"
        />
      </div>

      <div className="mt-4">
        <PreviewBanner color="green" label="Opening Balances:">
          Cash ₹{formatAmount(openingCashBalance)} | Bank ₹
          {formatAmount(openingBankBalance)}
        </PreviewBanner>
      </div>
    </SettingCard>
  );
}
