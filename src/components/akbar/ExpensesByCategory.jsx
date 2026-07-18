import {useState} from "react";
import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const utilitiesData = [
  {
    id: 1,
    billNo: "BTL12345",
    type: "Bill",
    date: "20/04/2026",
    title: "Water Service",
    vendor: "City Water Department",
    paymentMethod: "Bank Transfer",
    amount: "120.50",
  },
  {
    id: 2,
    billNo: "BTL12346",
    type: "Bill",
    date: "21/04/2026",
    title: "Electricity",
    vendor: "Power Grid",
    paymentMethod: "UPI",
    amount: "350.00",
  },
  {
    id: 3,
    billNo: "BTL12347",
    type: "Voucher",
    date: "22/04/2026",
    title: "Office Supplies",
    vendor: "Stationery World",
    paymentMethod: "Cash",
    amount: "275.00",
  },
  {
    id: 4,
    billNo: "BTL12348",
    type: "Bill",
    date: "23/04/2026",
    title: "Internet",
    vendor: "Airtel",
    paymentMethod: "Bank Transfer",
    amount: "899.00",
  },
  {
    id: 5,
    billNo: "BTL12349",
    type: "Bill",
    date: "24/04/2026",
    title: "Cleaning Service",
    vendor: "CleanPro",
    paymentMethod: "Cash",
    amount: "450.00",
  },
  {
    id: 6,
    billNo: "BTL12350",
    type: "Voucher",
    date: "25/04/2026",
    title: "Printer Ink",
    vendor: "HP Store",
    paymentMethod: "UPI",
    amount: "650.00",
  },
  {
    id: 7,
    billNo: "BTL12351",
    type: "Bill",
    date: "26/04/2026",
    title: "Generator Fuel",
    vendor: "Indian Oil",
    paymentMethod: "Cash",
    amount: "1200.00",
  },
  {
    id: 8,
    billNo: "BTL12352",
    type: "Bill",
    date: "27/04/2026",
    title: "Security Service",
    vendor: "Secure Guard",
    paymentMethod: "Bank Transfer",
    amount: "1800.00",
  },
  {
    id: 9,
    billNo: "BTL12353",
    type: "Voucher",
    date: "28/04/2026",
    title: "Maintenance",
    vendor: "FixIt Solutions",
    paymentMethod: "UPI",
    amount: "950.00",
  },
  {
    id: 10,
    billNo: "BTL12354",
    type: "Bill",
    date: "29/04/2026",
    title: "Air Conditioner Repair",
    vendor: "Cool Tech",
    paymentMethod: "Cash",
    amount: "2200.00",
  },
  {
    id: 11,
    billNo: "BTL12355",
    type: "Voucher",
    date: "30/04/2026",
    title: "Sound System Service",
    vendor: "Audio Care",
    paymentMethod: "UPI",
    amount: "1450.00",
  },
  {
    id: 12,
    billNo: "BTL12356",
    type: "Bill",
    date: "01/05/2026",
    title: "Building Maintenance",
    vendor: "BuildFix",
    paymentMethod: "Bank Transfer",
    amount: "3000.00",
  },
];

const utilitiesTotal = utilitiesData.reduce(
  (sum, item) => sum + Number(item.amount),
  0
);
export default function ExpensesByCategory() {

const [openSection, setOpenSection] = useState("");

const handleDownloadExpense = () => {
  const doc = new jsPDF();

  doc.text("Utilities Expense Report", 14, 15);

  autoTable(doc, {
    startY: 25,

    head: [[
      "SL",
      "Bill No",
      "Type",
      "Date",
      "Title",
      "Vendor",
      "Payment Method",
      "Amount",
    ]],

    body: utilitiesData.map((item) => [
      item.id,
      item.billNo,
      item.type,
      item.date,
      item.title,
      item.vendor,
      item.paymentMethod,
      "Rs. " + item.amount,
    ]),

    theme: "grid",

    styles: {
      fontSize: 8,
      cellPadding: 3,
      lineColor: [220, 220, 220],
      lineWidth: 0.1,
    },

    headStyles: {
      fillColor: [249, 250, 251],
      textColor: [0, 0, 0],
      fontStyle: "bold",
    },

    columnStyles: {
      7: {
        halign: "right",
        textColor: [220, 38, 38], // red amount
      },
    },
  });

  const finalY = doc.lastAutoTable.finalY;

  doc.setTextColor(0,0,0);
  doc.setFontSize(14);

  doc.text(
    `Category Total: Rs. ${utilitiesTotal}`,
    14,
    finalY + 12
  );

  doc.save("UtilitiesExpenseReport.pdf");
};  


  return (
    <div className="w-full px-2 sm:px-4 lg:px-6 p-3 py-4">

      {/* Main Report Box */}
      <div className="w-full bg-white border border-gray-300 rounded-lg p-3 md:p-5 shadow-sm">

        <h1 className="text-xl sm:text-2xl font-bold mb-1">
          Debit-wise Annual Reports
        </h1>

        <p className="text-gray-500 text-xs mb-6">
          Financial Year 2026-2027
        </p>

        {/* Income Heading */}
        <h2 className="font-bold text-base mb-4">
          Bills (Expenses) by Category
        </h2>

    <div className="bg-white rounded-xl p-4 mb-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">

      <div className="flex items-center justify-between bg-gray-50 px-3 py-3 rounded-lg mb-2">
        <button
          onClick={() =>
            setOpenSection(
              openSection === "utilities" ? "" : "utilities"
            )
          }
          className="flex items-center gap-2 font-semibold text-sm"
        >
          <span>
            {openSection === "utilities" ? "▲" : "▼"}
          </span>
      
          <span>Utilities</span>
        </button>
      
        <button
          onClick={handleDownloadExpense}
          className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          <FaDownload />
        </button>
      </div>
      

{openSection === "utilities" && (
<>

      <div className="text-right text-xs text-gray-500 mb-2">
        {utilitiesData.length} bills • ₹{utilitiesTotal.toLocaleString()}
      </div>

      <div className="overflow-auto max-h-[373px]">
       <table className="min-w-[1000px] w-full border border-gray-200 text-xs whitespace-nowrap">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-2 py-2 text-center">
              SL
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Bill/Voucher No
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Type
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Date
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Title
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Vendor
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Payment Method
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
  {utilitiesData.map((item) => (
    <tr key={item.id}>
      <td className="border border-gray-200 px-2 py-2">
        {item.id}
      </td>

      <td className="border border-gray-200 px-2 py-2 text-blue-600">
        {item.billNo}
      </td>

      <td className="border border-gray-200 px-2 py-2">
        {item.type}
      </td>

      <td className="border border-gray-200 px-2 py-2">
        {item.date}
      </td>

      <td className="border border-gray-200 px-2 py-2">
        {item.title}
      </td>

      <td className="border border-gray-200 px-2 py-2">
        {item.vendor}
      </td>

      <td className="border border-gray-200 px-2 py-2">
        {item.paymentMethod}
      </td>

      <td className="border border-gray-200 px-2 py-2 text-right text-red-500">
        ₹{item.amount}
      </td>
    </tr>
  ))}
</tbody>
      </table>
      </div>
      <div className="bg-red-50 px-4 py-3 text-right">
        <div className="text-red-500 text-xs font-medium">
          Category Total
        </div>

        <div className="text-red-600 font-bold text-lg">
          ₹{utilitiesTotal.toLocaleString()}
        </div>
      </div>
      </>
)}

    </div>
  </div> 
 </div>  
  );
}