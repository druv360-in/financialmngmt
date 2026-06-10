const specialOfferingsData = [
  {
    id: 1,
    receiptNo: "RCP2001",
    date: "14/04/2026",
    title: "Building Fund Donation",
    payer: "John Smith",
    paymentMethod: "Cheque",
    amount: "1000.00",
  },
  {
    id: 2,
    receiptNo: "RCP2002",
    date: "15/04/2026",
    title: "Building Fund Donation",
    payer: "Mary Thomas",
    paymentMethod: "UPI",
    amount: "1500.00",
  },
  {
    id: 3,
    receiptNo: "RCP2003",
    date: "16/04/2026",
    title: "Mission Support",
    payer: "David Paul",
    paymentMethod: "Cash",
    amount: "800.00",
  },
  {
    id: 4,
    receiptNo: "RCP2004",
    date: "17/04/2026",
    title: "Building Fund Donation",
    payer: "Samuel Roy",
    paymentMethod: "Bank Transfer",
    amount: "2000.00",
  },
  {
    id: 5,
    receiptNo: "RCP2005",
    date: "18/04/2026",
    title: "Mission Support",
    payer: "Annie Joseph",
    paymentMethod: "UPI",
    amount: "1200.00",
  },
  {
    id: 6,
    receiptNo: "RCP2006",
    date: "19/04/2026",
    title: "Building Fund Donation",
    payer: "Thomas George",
    paymentMethod: "Cash",
    amount: "1750.00",
  },
  {
    id: 7,
    receiptNo: "RCP2007",
    date: "20/04/2026",
    title: "Mission Support",
    payer: "Sarah Mathew",
    paymentMethod: "Cheque",
    amount: "950.00",
  },
  {
    id: 8,
    receiptNo: "RCP2008",
    date: "21/04/2026",
    title: "Building Fund Donation",
    payer: "Joseph Mathew",
    paymentMethod: "UPI",
    amount: "2200.00",
  },
  {
    id: 9,
    receiptNo: "RCP2009",
    date: "22/04/2026",
    title: "Mission Support",
    payer: "Kevin Roy",
    paymentMethod: "Cash",
    amount: "1350.00",
  },
  {
    id: 10,
    receiptNo: "RCP2010",
    date: "23/04/2026",
    title: "Building Fund Donation",
    payer: "Peter Jacob",
    paymentMethod: "Bank Transfer",
    amount: "1800.00",
  },
  {
    id: 11,
    receiptNo: "RCP2011",
    date: "24/04/2026",
    title: "Mission Support",
    payer: "Alan Thomas",
    paymentMethod: "UPI",
    amount: "900.00",
  },
  {
    id: 12,
    receiptNo: "RCP2012",
    date: "25/04/2026",
    title: "Building Fund Donation",
    payer: "George Mathew",
    paymentMethod: "Cheque",
    amount: "2500.00",
  },
];

const specialOfferingsTotal = specialOfferingsData.reduce(
  (sum, item) => sum + Number(item.amount),
  0
);



export default function IncomeByCategory() {

  const handleDownload = () => {
    alert("File has been downloading");
  };
  return (
    <div className="border border-gray-200 rounded-md p-4 mb-4">

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-sm">
          Special Offerings
        </h3>

        <button className="bg-black text-white px-3 py-1 rounded text-xs" onClick={handleDownload}>
          Download PDF
        </button>
      </div>

      <div className="text-right text-xs text-gray-500 mb-2">
        {specialOfferingsData.length} receipts • ₹{specialOfferingsTotal.toLocaleString()}
      </div>

      <div className="overflow-x-auto">
       <table className="min-w-[850px] w-full border border-gray-200 text-xs whitespace-nowrap">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-2 py-2 text-center">
              SL
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Receipt No
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Date
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Title
            </th>

            <th className="border border-gray-200 px-2 py-2 text-center">
              Payer
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
  {specialOfferingsData.map((item) => (
    <tr key={item.id}>
      <td className="border border-gray-200 px-2 py-2">
        {item.id}
      </td>

      <td className="border border-gray-200 px-2 py-2 text-blue-600">
        {item.receiptNo}
      </td>

      <td className="border border-gray-200 px-2 py-2">
        {item.date}
      </td>

      <td className="border border-gray-200 px-2 py-2">
        {item.title}
      </td>

      <td className="border border-gray-200 px-2 py-2">
        {item.payer}
      </td>

      <td className="border border-gray-200 px-2 py-2">
        {item.paymentMethod}
      </td>

      <td className="border border-gray-200 px-2 py-2 text-right text-green-600">
        ₹{item.amount}
      </td>
    </tr>
  ))}
</tbody>
      </table>
      </div>
      <div className="bg-green-50 px-4 py-3 text-right">
        <div className="text-green-600 text-xs font-medium">
          Category Total
        </div>

        <div className="text-green-700 font-bold text-lg">
          ₹{specialOfferingsTotal.toLocaleString()}
        </div>
      </div>

    </div>
  );
}