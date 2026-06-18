import { useState } from "react";
import Sidemenu from "../components/binoj/Sidemenu";
import CategoryWiseAnnualReport from "../components/akbar/CategoryWiseAnnualReport";

export default function CategoryReportPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Sidemenu/>
    
      <main className="lg:ml-[232px] min-h-screen">
       <CategoryWiseAnnualReport />
      </main>
    </div>
  );
}