import { useState } from "react";
import Sidemenu from "../components/binoj/Sidemenu";
import ExpensesByCategory from "../components/akbar/ExpensesByCategory";

export default function DebitWiseReportPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Sidemenu/>
    
      <main className="lg:ml-[232px] min-h-screen">
       <ExpensesByCategory />
      </main>
    </div>
  );
}