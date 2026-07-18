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
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row overflow-x-hidden">
      <Sidemenu />

      {/* Main content wrapper containing fluid sizing boundaries for 4K layout space */}
      <main className="flex-1 lg:pl-58 w-full min-h-screen flex flex-col justify-between min-w-0">
        
        {/* Main Content Viewport */}
        <div className="w-full p-4 md:p-6 lg:p-8 space-y-6 mx-auto max-w-[2560px]">
          <header className="mb-6">
            {/* Reduced from font-extrabold to font-semibold as requested */}
            <h1 className="text-3xl font-bold text-gray-900 leading-tight sm:text-[26px] 2xl:text-3xl">
              System Settings
            </h1>
            <p className="mt-1 text-sm text-slate-600 2xl:text-base">
              Configure numbering for receipts and vouchers
            </p>
          </header>

          {/* 
            Changed grid back to a standard vertical space stack. 
            All components are fully separate, independent, and uniform across 1024px, 1440px, and 4K viewports.
          */}
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

        {/* Sticky footer tracking the 4K viewport max-width scale bounds */}
        <div className="sticky bottom-0 mt-8 border-t border-slate-200 bg-slate-50/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8 2xl:px-12 z-10 w-full">
          <div className="mx-auto flex w-full max-w-[2560px] justify-end">
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
    </div>
  );
}