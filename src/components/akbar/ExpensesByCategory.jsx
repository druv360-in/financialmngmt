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

  const handleDownload = () => {
    alert("File has been downloading");
  };
  return (
    <div className="border border-gray-200 rounded-md p-4">

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">
          Utilities
        </h3>

       <button
       onClick={handleDownload}
       className="bg-black text-white px-3 py-1 rounded text-xs"
     >
          Download PDF
        </button>
      </div>

      <div className="text-right text-xs text-gray-500 mb-2">
        {utilitiesData.length} bills • ₹{utilitiesTotal.toLocaleString()}
      </div>

      <div className="overflow-x-auto">
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

    </div>
  );
}