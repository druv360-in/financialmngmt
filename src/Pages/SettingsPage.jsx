import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FinancialYearSetting from "../components/binoj/FinancialYearSetting";
import Icon from "../components/binoj/Icon";
import ReceiptNumbering from "../components/binoj/ReceiptNumbering";
import { ImportantNotes } from "../components/binoj/SettingCard";
import Sidemenu from '../components/binoj/Sidemenu';
import VoucherNumbering from "../components/binoj/VoucherNumbering";

export default function SettingsPage() {
  const [receiptPrefix, setReceiptPrefix] = useState("RCP");
  const [nextReceiptNumber, setNextReceiptNumber] = useState("1001");
  const [voucherPrefix, setVoucherPrefix] = useState("VCH");
  const [nextVoucherNumber, setNextVoucherNumber] = useState("5001");
  const [financialYearStart, setFinancialYearStart] = useState("2026-01-01");
  const [openingCashBalance, setOpeningCashBalance] = useState("0");
  const [openingBankBalance, setOpeningBankBalance] = useState("0");

  function handleSave() {
    const settings = {
      receiptPrefix,
      nextReceiptNumber,
      voucherPrefix,
      nextVoucherNumber,
      financialYearStart,
      openingCashBalance,
      openingBankBalance,
    };

    console.log("Settings saved", settings);
  }

  return (
    <>
      <Sidemenu />

      <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:pl-[264px] lg:pr-8 lg:pt-9 2xl:px-12 2xl:pl-[296px]">
        <div className="mx-auto w-full max-w-[920px] 2xl:max-w-[1320px]">
          <header className="mb-6">
            <h1 className="text-2xl font-extrabold tracking-normal text-slate-950 sm:text-[26px] 2xl:text-4xl">
              System Settings
            </h1>
            <p className="mt-1 text-sm text-slate-600 2xl:text-base">
              Configure numbering for receipts and vouchers
            </p>
          </header>

          <div className="space-y-6 2xl:space-y-8">
            <ReceiptNumbering
              receiptPrefix={receiptPrefix}
              setReceiptPrefix={setReceiptPrefix}
              nextReceiptNumber={nextReceiptNumber}
              setNextReceiptNumber={setNextReceiptNumber}
            />

            <VoucherNumbering
              voucherPrefix={voucherPrefix}
              setVoucherPrefix={setVoucherPrefix}
              nextVoucherNumber={nextVoucherNumber}
              setNextVoucherNumber={setNextVoucherNumber}
            />

            <FinancialYearSetting
              financialYearStart={financialYearStart}
              setFinancialYearStart={setFinancialYearStart}
              openingCashBalance={openingCashBalance}
              setOpeningCashBalance={setOpeningCashBalance}
              openingBankBalance={openingBankBalance}
              setOpeningBankBalance={setOpeningBankBalance}
            />

            <ImportantNotes />
          </div>
        </div>

        <div className="sticky bottom-0 -mx-4 mt-6 border-t border-slate-200 bg-slate-50/90 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 2xl:-mx-12 2xl:px-12">
          <div className="mx-auto flex w-full max-w-[920px] justify-end 2xl:max-w-[1320px]">
            <button
              type="button"
              onClick={handleSave}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              <Icon
                size={16}
                d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z M17 21v-8H7v8 M7 3v5h8"
              />
              Save Settings
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
