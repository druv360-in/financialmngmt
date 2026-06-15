import { useState } from "react";

import Sidemenu from "../components/binoj/Sidemenu";
import ReceiptsManagement from "../components/arathi/Receiptsmanagement";
import Analysis_Card from "../components/Prince/Analysis_Card";
import AddReceipt from "../components/shilla/AddReceipt";
import All_Receipts from "../components/Prince/All_Receipts";
import EditReceipt from "../components/shilla/EditReceipt";

function Page5() {
  const [showAddReceipt, setShowAddReceipt] = useState(false);
  const [showEditReceipt, setShowEditReceipt] = useState(false);

  // MAIN DATA SOURCE
  const [receipts, setReceipts] = useState([]);

  // RECEIPT CURRENTLY BEING EDITED
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  // OPEN EDIT MODAL
  const handleEditReceipt = (receipt) => {
    setSelectedReceipt(receipt);
    setShowEditReceipt(true);
  };

  // DELETE RECEIPT
  const handleDeleteReceipt = (receiptNo) => {
    setReceipts((prev) =>
      prev.filter((r) => r.receiptNo !== receiptNo)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">

        {/* Sidebar */}
        <div className="w-full lg:w-64 shrink-0 lg:min-h-screen bg-white">
          <Sidemenu />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          <div className="space-y-6">

            <ReceiptsManagement
              receipts={receipts}
              onAddReceipt={() => setShowAddReceipt(true)}
            />
{receipts.length > 0 && (
  <Analysis_Card
    receipts={receipts}
  />
)}
            <All_Receipts
              receipts={receipts}
              onAddReceipt={() => setShowAddReceipt(true)}
              onEditReceipt={handleEditReceipt}
              onDeleteReceipt={handleDeleteReceipt}
            />

          </div>
        </div>

      </div>

      {/* ADD RECEIPT */}
      {showAddReceipt && (
        <AddReceipt
          onClose={() => setShowAddReceipt(false)}
          setReceipts={setReceipts}
        />
      )}

      {/* EDIT RECEIPT */}
      {showEditReceipt && (
        <EditReceipt
          receipt={selectedReceipt}
          setReceipts={setReceipts}
          onClose={() => {
            setShowEditReceipt(false);
            setSelectedReceipt(null);
          }}
        />
      )}
    </div>
  );
}

export default Page5;