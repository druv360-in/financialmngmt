import Ledger_format_table from "../components/aswanth/Ledger_format_table";
import Families_members from "../components/aswanth/Families_members";
import Sidemenu from "../components/binoj/Sidemenu";

function Families() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* SIDEBAR: Hidden on mobile/tablet unless managed by a menu toggle; fits nicely in flex on desktop */}
      <div className="w-full lg:w-64 lg:shrink-0">
        <Sidemenu />
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 gap-6 min-w-0">
        {/* Top Segment: Family Members overview */}
        <div className="w-full">
          <Families_members />
        </div>

        {/* Bottom Segment: Responsive Ledger Table */}
        <div className="w-full">
          <Ledger_format_table />
        </div>
      </div>
    </div>
  );
}

export default Families;