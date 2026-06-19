import { useState } from "react";
import Icon from "./Icon";
import SettingCard, { PreviewBanner, SettingsField } from "./SettingCard";

export default function ReceiptNumbering({
  receiptPrefix,
  setReceiptPrefix,
  nextReceiptNumber,
  setNextReceiptNumber,
}) {
  return (
    <SettingCard
      title="Receipt Numbering"
      icon={<Icon name="settings" size={20} className="text-blue-600" />}
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-5 2xl:gap-8">
        <SettingsField
          label="Receipt Prefix"
          value={receiptPrefix}
          onChange={setReceiptPrefix}
          helper="Letters to prefix receipt numbers"
        />
        <SettingsField
          label="Next Receipt Number"
          value={nextReceiptNumber}
          onChange={setNextReceiptNumber}
          inputMode="numeric"
          helper="Next number to be assigned"
        />
      </div>

      <div className="mt-4">
        <PreviewBanner color="blue" label="Preview:">
          Next receipt will be{" "}
          <span className="font-bold text-blue-700">
            {receiptPrefix}
            {nextReceiptNumber}
          </span>
        </PreviewBanner>
      </div>
    </SettingCard>
  );
}
