import React from "react";
import DuesreportCard from "../components/binoj/DuesreportCard";
import Sidemenu from '../components/binoj/Sidemenu';

export default function DuesReportPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased selection:bg-indigo-100 flex flex-col lg:flex-row overflow-x-hidden">
      {/* 
        Sidemenu left completely untouched.
        Placing it side-by-side inside the flex shell handles the width layout calculation perfectly.
      */}
      <Sidemenu />

      {/* 
        Main content wrapper.
        REMOVED 'lg:pl-58' to stop the double-padding push bug on 1024px and 1440px.
        Using min-w-0 ensures that data tables or child layouts don't create horizontal overflows.
      */}
      <main className="flex-1 w-full min-w-0 px-4 py-6 sm:px-6 md:px-8 2xl:px-12 transition-all duration-200">
        {/* 
          Max-width matches standard 4K configuration (max-w-[2560px]).
          Centered safely via mx-auto to maintain a flawless grid presentation.
        */}
        <div className="w-full max-w-[2560px] mx-auto space-y-6 sm:space-y-8 2xl:space-y-12">
          
          <DuesreportCard />
          
        </div>
      </main>
    </div>
  );
}