import React from "react";
import { useState } from "react";

// binoj
import Sidemenu from "../Components/binoj/Sidemenu";

// aswanth
import View_familycard from "../Components/aswanth/View_familycard";

// abhijith
import ViewFamilyMembersCard from "../Components/Abhijith/ViewFamilyMembersCard38";
import FamilyPendingDues from "../Components/Abhijith/FamilyPendingDues40";

// alka
import FamilyPaymentTracker from "../Components/alka/FamilyPaymentTracker";

function FamiliesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidemenu />

      {/* Main Content */}

  <main className="flex-1 pt-16 lg:pt-6 p-4 md:p-6 lg:ml-60">
    <div className="w-full space-y-6">
      <View_familycard />
      <ViewFamilyMembersCard />
      <FamilyPendingDues />
      <FamilyPaymentTracker />
    </div>
  </main>

    </div>
  );
}

export default FamiliesPage;