import React from "react";
import DuesreportCard from "../components/binoj/DuesreportCard";
import Sidemenu from '../components/binoj/Sidemenu';

export default function DuesReportPage() {
  return (

    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased selection:bg-indigo-100">
      <div className="flex flex-col lg:flex-row min-h-screen relative w-full">
        
        
   
        <div className="w-full lg:w-auto shrink-0 z-20">
          <Sidemenu />
        </div>
        <main className="flex-1 w-full min-w-0 px-4 py-6 sm:px-6 md:px-8 2xl:px-12 4k:px-20 4k:py-16 transition-all duration-200">
          <div className="mx-auto w-full max-w-[1600px] 4k:max-w-[2560px] space-y-6 sm:space-y-8 4k:space-y-12">
            
            
            <DuesreportCard />
            
          </div>
        </main>
      </div>
    </div>
  );
}