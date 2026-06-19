import { useState } from "react";
import Icon from "./Icon";
import SettingCard, { PreviewBanner, SettingsField } from "./SettingCard";

export default function VoucherNumbering({
  voucherPrefix,
  setVoucherPrefix,
  nextVoucherNumber,
  setNextVoucherNumber,
}) {
  return (
    <SettingCard
      title="Voucher Numbering"
      icon={<Icon name="settings" size={20} className="text-orange-600" />}
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-5 2xl:gap-8">
        <SettingsField
          label="Voucher Prefix"
          value={voucherPrefix}
          onChange={setVoucherPrefix}
          helper="Letters to prefix voucher numbers"
        />
        <SettingsField
          label="Next Voucher Number"
          value={nextVoucherNumber}
          onChange={setNextVoucherNumber}
          inputMode="numeric"
          helper="Next number to be assigned"
        />
      </div>

      <div className="mt-4">
        <PreviewBanner color="orange" label="Preview:">
          Next voucher will be{" "}
          <span className="font-bold text-orange-700">
            {voucherPrefix}
            {nextVoucherNumber}
          </span>
        </PreviewBanner>
      </div>
    </SettingCard>
  );
}
