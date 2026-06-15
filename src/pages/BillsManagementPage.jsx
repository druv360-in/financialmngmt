import { useState } from "react";

import Sidemenu from "../components/binoj/Sidemenu";

import BillsManagement from "../components/vimal/BillsManagement";
import AllBills from "../components/vimal/AllBills";
import Addoreditbill from "../components/arathi/Addoreditbill";

export default function BillsPage() {
  /* =========================================================
     STATE
  ========================================================= */

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  /* =========================================================
     HELPERS
  ========================================================= */

  const formatDateForInput = (date) => {
    const [day, month, year] = date.split("/");

    return `${year}-${month}-${day}`;
  };

  const formatDateForDisplay = (date) => {
    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
  };

  const getMonthYear = (dateString) => {
    const [day, month, year] = dateString.split("/");

    const date = new Date(year, month - 1, day);

    return date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  /* =========================================================
     INITIAL DATA
  ========================================================= */

  const initialGroupedBills = [
    {
      month: "April 2026",

      bills: [
        {
          id: 1,
          title: "Electricity Bill",
          recordNumber: "VCH5000",
          recordType: "Voucher",
          status: "Pending",
          vendor: "Power Company",
          category: "Utilities",
          dueDate: "25/04/2026",
          description: "Monthly electricity for church building",
          amount: "₹450.00",
        },

        {
          id: 2,
          title: "Water Service",
          recordNumber: "BILL12345",
          recordType: "Bill",
          status: "Paid",
          vendor: "City Water Department",
          category: "Utilities",
          dueDate: "20/04/2026",
          description: "Monthly water supply charges",
          amount: "₹120.50",
        },
      ],
    },

    {
      month: "March 2026",

      bills: [
        {
          id: 3,
          title: "Internet Bill",
          recordNumber: "VCH3022",
          recordType: "Voucher",
          status: "Overdue",
          vendor: "Airtel Broadband",
          category: "Utilities",
          dueDate: "15/03/2026",
          description: "Church internet connection bill",
          amount: "₹999.00",
        },

        {
          id: 4,
          title: "Building Maintenance",
          recordNumber: "BILL2231",
          recordType: "Bill",
          status: "Paid",
          vendor: "ABC Contractors",
          category: "Maintenance",
          dueDate: "05/03/2026",
          description: "Repair and maintenance work",
          amount: "₹2500.00",
        },
      ],
    },
  ];

  const [groupedBills, setGroupedBills] =
    useState(initialGroupedBills);

  const bills = groupedBills.flatMap(
    (group) => group.bills
  );

  /* =========================================================
     ADD BILL
  ========================================================= */

  const handleAddBill = () => {
    setSelectedBill(null);
    setModalOpen(true);
  };

  /* =========================================================
     EDIT BILL
  ========================================================= */

  const handleEditBill = (bill) => {
    setSelectedBill({
      id: bill.recordNumber,

      billType:
        bill.recordType === "Voucher"
          ? "Voucher (System Generated)"
          : "Bill (From Institution)",

      title: bill.title,
      vendor: bill.vendor,

      amount: bill.amount.replace("₹", ""),

      dueDate: formatDateForInput(
        bill.dueDate
      ),

      category: bill.category,
      status: bill.status,
      description: bill.description,
    });

    setModalOpen(true);
  };

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedBill(null);
  };

  /* =========================================================
     SUBMIT BILL (ADD / EDIT)
  ========================================================= */

  const handleSubmitBill = (billData) => {
    if (selectedBill) {
      // EDIT BILL

      setGroupedBills((prev) =>
        prev.map((group) => ({
          ...group,

          bills: group.bills.map((bill) =>
            bill.recordNumber === selectedBill.id
              ? {
                  ...bill,
                  title: billData.title,
                  vendor: billData.vendor,
                  category: billData.category,
                  status: billData.status,
                  description: billData.description,
                  dueDate: formatDateForDisplay(
                    billData.dueDate
                  ),
                  amount: `₹${billData.amount}`,
                }
              : bill
          ),
        }))
      );
    } else {
      // ADD BILL

      const timestamp = Date.now();

      const displayDate = formatDateForDisplay(
        billData.dueDate
      );

      const newBill = {
        id: timestamp,

        title: billData.title,

        recordNumber:
          billData.billType ===
          "Voucher (System Generated)"
            ? `VCH${timestamp}`
            : `BILL${timestamp}`,

        recordType:
          billData.billType ===
          "Voucher (System Generated)"
            ? "Voucher"
            : "Bill",

        status: billData.status,
        vendor: billData.vendor,
        category: billData.category,

        dueDate: displayDate,

        description: billData.description,

        amount: `₹${billData.amount}`,
      };

      const targetMonth =
        getMonthYear(displayDate);

      setGroupedBills((prev) => {
        const monthExists = prev.some(
          (group) =>
            group.month === targetMonth
        );

        if (monthExists) {
          return prev.map((group) =>
            group.month === targetMonth
              ? {
                  ...group,

                  bills: [
                    newBill,
                    ...group.bills,
                  ],
                }
              : group
          );
        }

        return [
          {
            month: targetMonth,
            bills: [newBill],
          },

          ...prev,
        ];
      });
    }

    setModalOpen(false);
    setSelectedBill(null);
  };

  /* =========================================================
     DELETE BILL
  ========================================================= */

  const handleDeleteBill = (
    recordNumber
  ) => {
    const confirmDelete =
      window.confirm(
        "Delete this bill?"
      );

    if (!confirmDelete) return;

    setGroupedBills((prev) =>
      prev
        .map((group) => ({
          ...group,

          bills: group.bills.filter(
            (bill) =>
              bill.recordNumber !==
              recordNumber
          ),
        }))
        .filter(
          (group) =>
            group.bills.length > 0
        )
    );
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidemenu />

      <main
        className="
          lg:ml-58
          p-4
          md:p-6
          lg:p-8
          space-y-8
        "
      >
        <BillsManagement
          bills={bills}
          onAddBill={handleAddBill}
        />

        <AllBills
          groupedBills={groupedBills}
          onEditBill={handleEditBill}
          onDeleteBill={handleDeleteBill}
        />

        <Addoreditbill
          isOpen={modalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmitBill}
          billData={selectedBill}
        />
      </main>
    </div>
  );
}