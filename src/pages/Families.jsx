import Family_stats from "../components/aswanth/Family_stats";
import Ledger_format_table from "../components/aswanth/Ledger_format_table";
import View_familycard from "../components/aswanth/View_familycard";
import Families_members from "../components/aswanth/Families_members";
import Sidemenu from "../components/binoj/Sidemenu";

function Families() {
  return (
    <div className=" p-5">
      <Sidemenu />
      <div className="-ml-5">
        <Families_members />
        </div>
      <div className="mt-20 ml-50">
        <Ledger_format_table />
      </div>
    </div>
  );
}

export default Families;