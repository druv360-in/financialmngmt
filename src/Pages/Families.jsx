import Ledger_format_table from "../components/aswanth/Ledger_format_table";
import Families_members from "../components/aswanth/Families_members";
import Sidemenu from "../components/binoj/Sidemenu";

function Families() {
  return (
    <>
      {/* MOBILE & TABLET VIEW */}
      <div className="block lg:hidden p-3 mt-1">
        <Sidemenu />

        <div className="relative ">
  <Families_members />
</div>

        <div className="mt-40 overflow-x-auto">
          <Ledger_format_table />
        </div>
      </div>

      {/* LAPTOP & DESKTOP VIEW */}
      <div className="hidden lg:flex min-h-screen">
        <div className="w-64 shrink-0">
          <Sidemenu />
        </div> 

        <div className="absolute z-100 ">
          <Families_members />
        </div>
          <div className="absolute right-37 mt-40 w-256.25">
            <Ledger_format_table />
          </div>
        
      </div>
    </>
  );
}

export default Families;