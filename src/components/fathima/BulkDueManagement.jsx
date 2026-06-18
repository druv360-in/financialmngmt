import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CreateBulkDue from "./CreateBulkDue";

function BulkDueManagement() {
  const navigate = useNavigate();

  const handleCreate = () => {
  navigate("/create-bulk-due");
  };

  return (
<div className="w-full max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">

        <div>
<h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              Bulk Dues Management
          </h1>

<p className="text-base md:text-lg text-gray-500">
              Create collection events for multiple families at once
          </p>
        </div>

       
        <Dialog>
  <DialogTrigger> <button
          
          className="bg-black text-white px-8 py-4 rounded-2xl">
            + Create Bulk Due
        </button></DialogTrigger>
  <DialogContent className="bg-white border-1 border-[#D9D9D9] sm:max-w-md  max-h-[90vh] sm:max-h-[85vh]  overflow-y-auto no-scrollbar">
      <CreateBulkDue/>
  </DialogContent>
</Dialog>

      </div>

      {/* About Card */}
<div className="bg-white border border-gray-200 rounded-3xl p-4 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          About Bulk Dues
        </h2>

        <p className="text-lg text-gray-600 leading-8 mb-8">
          Use this feature to create collection events that apply to multiple
          families at once, such as:
        </p>

        <ul className="list-disc pl-8 text-lg text-gray-600 space-y-4 mb-10">
          <li>Mission Sunday collections</li>
          <li>Building fund contributions</li>
          <li>Special church events</li>
          <li>Annual membership fees</li>
        </ul>

        <div className="bg-gray-100 rounded-2xl p-5">
          <p className="text-2xl font-bold text-gray-900">
            Total Families: 2
          </p>
        </div>

      </div>

    </div>
  );
}

export default BulkDueManagement;