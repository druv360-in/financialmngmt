import { useState } from "react";
import UnpaidDuesList from "../components/kamal/UnpaidDuesList";
import FamilyDuesStatus from "../components/kamal/FamilyDuesStatus";
import IndividualPaymentDues from "../components/kamal/IndividualPaymentDues";
import Sidemenu from "../components/binoj/Sidemenu";

function UnpaidDuesPage() {
  const [showPaymentModal, setShowPaymentModal] =
    useState(false);

  return (
<div className="min-h-screen bg-[#f4f5f7] lg:flex">
        {/* DASHBOARD SPACE */}
        <Sidemenu />
      

      {/* MAIN */}
<div className="flex-1 min-w-0 lg:ml-64 px-4 py-6 sm:px-6 lg:px-8 overflow-x-hidden overflow-y-auto">
            <div className="mx-auto w-full max-w-[1220px]">
          <UnpaidDuesList />

          <FamilyDuesStatus
            openPaymentModal={() =>
              setShowPaymentModal(true)
            }
          />

          {showPaymentModal && (
            <IndividualPaymentDues
              closeModal={() =>
                setShowPaymentModal(false)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default UnpaidDuesPage;