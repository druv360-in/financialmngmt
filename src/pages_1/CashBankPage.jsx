import { useState } from "react";

// Local components
import CashBankManagement from "../components/geethika/CashBankManagement";
import TransactionSummary from "../components/geethika/TransactionSummary";
import DepositButton from "../components/geethika/DepositButton";

// Team components
import RecentDeposits from "../components/abin/RecentDeposits";
import DepositStatistics from "../components/abin/DepositStatistics";
import WithdrawCash from "../components/anfas/WithdrawCash";
import DepositCash from "../components/abin/DepositCash";
import Sidemenu from "../components/binoj/Sidemenu";

const CashBankPage = () => {

  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">

      {/* Sidebar */}
      <div className="lg:w-64">
        <Sidemenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-10 py-6 ">

        <DepositButton
          onDepositClick={() => setShowDeposit(true)}
          onWithdrawClick={() => setShowWithdraw(true)}
        />

        <div className="mt-5 space-y-5">
          <CashBankManagement />
          <TransactionSummary />

        <RecentDeposits />

        <DepositStatistics />
 
        </div>

        
        {/* POPUPS */}
        {showWithdraw && (
          <WithdrawCash onCancel={() => setShowWithdraw(false)} />
        )}

        {showDeposit && (
          <DepositCash onCancel={() => setShowDeposit(false)} />
        )}

      </div>
    </div>
  );
};

export default CashBankPage;