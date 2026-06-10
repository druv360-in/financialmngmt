import IncomeByCategory from "./IncomeByCategory";
import ExpensesByCategory from "./ExpensesByCategory";


const monthlyCollectionData = [
  {
    id: 1,
    receiptNo: "RCP1002",
    date: "15/04/2026",
    title: "Monthly Collection",
    payer: "John Smith",
    paymentMethod: "Cash",
    amount: "750.00",
  },
  {
    id: 2,
    receiptNo: "RCP1003",
    date: "16/04/2026",
    title: "Monthly Collection",
    payer: "Mary Thomas",
    paymentMethod: "UPI",
    amount: "850.00",
  },
  {
    id: 3,
    receiptNo: "RCP1004",
    date: "17/04/2026",
    title: "Monthly Collection",
    payer: "David Paul",
    paymentMethod: "Bank Transfer",
    amount: "600.00",
  },
  {
    id: 4,
    receiptNo: "RCP1005",
    date: "18/04/2026",
    title: "Monthly Collection",
    payer: "Samuel Roy",
    paymentMethod: "Cash",
    amount: "950.00",
  },
  {
    id: 5,
    receiptNo: "RCP1006",
    date: "19/04/2026",
    title: "Monthly Collection",
    payer: "Annie Joseph",
    paymentMethod: "UPI",
    amount: "1200.00",
  },
  {
    id: 6,
    receiptNo: "RCP1007",
    date: "20/04/2026",
    title: "Monthly Collection",
    payer: "Thomas George",
    paymentMethod: "Cheque",
    amount: "700.00",
  },
  {
    id: 7,
    receiptNo: "RCP1008",
    date: "21/04/2026",
    title: "Monthly Collection",
    payer: "Sarah Mathew",
    paymentMethod: "Cash",
    amount: "500.00",
  },
  {
    id: 8,
    receiptNo: "RCP1009",
    date: "22/04/2026",
    title: "Monthly Collection",
    payer: "Joseph Mathew",
    paymentMethod: "UPI",
    amount: "1500.00",
  },
  {
    id: 9,
    receiptNo: "RCP1010",
    date: "23/04/2026",
    title: "Monthly Collection",
    payer: "Kevin Roy",
    paymentMethod: "Bank Transfer",
    amount: "1100.00",
  },
  {
    id: 10,
    receiptNo: "RCP1011",
    date: "24/04/2026",
    title: "Monthly Collection",
    payer: "Peter Jacob",
    paymentMethod: "Cash",
    amount: "950.00",
  },
  {
    id: 11,
    receiptNo: "RCP1012",
    date: "25/04/2026",
    title: "Monthly Collection",
    payer: "Alan Thomas",
    paymentMethod: "UPI",
    amount: "650.00",
  },
  {
    id: 12,
    receiptNo: "RCP1013",
    date: "26/04/2026",
    title: "Monthly Collection",
    payer: "George Mathew",
    paymentMethod: "Bank Transfer",
    amount: "1800.00",
  },
];

const tithesOfferingsData = [
  {
    id: 1,
    receiptNo: "RCP1000",
    date: "13/04/2026",
    title: "Sunday Offering",
    payer: "Congregation",
    paymentMethod: "Cash",
    amount: "2500.00",
  },
  {
    id: 2,
    receiptNo: "RCP1001",
    date: "14/04/2026",
    title: "Sunday Offering",
    payer: "Thomas",
    paymentMethod: "UPI",
    amount: "1800.00",
  },
  {
    id: 3,
    receiptNo: "RCP1002",
    date: "15/04/2026",
    title: "Sunday Offering",
    payer: "Joseph",
    paymentMethod: "Cash",
    amount: "2200.00",
  },
  {
    id: 4,
    receiptNo: "RCP1003",
    date: "16/04/2026",
    title: "Sunday Offering",
    payer: "Mary",
    paymentMethod: "Bank Transfer",
    amount: "1500.00",
  },
  {
    id: 5,
    receiptNo: "RCP1004",
    date: "17/04/2026",
    title: "Sunday Offering",
    payer: "David",
    paymentMethod: "Cash",
    amount: "3000.00",
  },
  {
    id: 6,
    receiptNo: "RCP1005",
    date: "18/04/2026",
    title: "Sunday Offering",
    payer: "Samuel",
    paymentMethod: "UPI",
    amount: "1750.00",
  },
  {
    id: 7,
    receiptNo: "RCP1006",
    date: "19/04/2026",
    title: "Sunday Offering",
    payer: "Annie",
    paymentMethod: "Cash",
    amount: "2600.00",
  },
  {
    id: 8,
    receiptNo: "RCP1007",
    date: "20/04/2026",
    title: "Sunday Offering",
    payer: "Peter",
    paymentMethod: "Cheque",
    amount: "2100.00",
  },
  {
    id: 9,
    receiptNo: "RCP1008",
    date: "21/04/2026",
    title: "Sunday Offering",
    payer: "George",
    paymentMethod: "Cash",
    amount: "1950.00",
  },
  {
    id: 10,
    receiptNo: "RCP1009",
    date: "22/04/2026",
    title: "Sunday Offering",
    payer: "Kevin",
    paymentMethod: "UPI",
    amount: "2800.00",
  },
  {
    id: 11,
    receiptNo: "RCP1010",
    date: "23/04/2026",
    title: "Sunday Offering",
    payer: "Sarah",
    paymentMethod: "Cash",
    amount: "2400.00",
  },
  {
    id: 12,
    receiptNo: "RCP1011",
    date: "24/04/2026",
    title: "Sunday Offering",
    payer: "Alan",
    paymentMethod: "Bank Transfer",
    amount: "3200.00",
  },
];

const totalAmount = monthlyCollectionData.reduce(
  (sum, item) => sum + Number(item.amount),
  0
);

const tithesTotal = tithesOfferingsData.reduce(
  (sum, item) => sum + Number(item.amount),
  0
);

export default function CategoryWiseAnnualReport() {

  const handleDownload = () => {
    alert("File has been downloading");
  };

  return (
    <div className="w-full px-2 sm:px-4 lg:px-6 p-3 py-4">

      {/* Main Report Box */}
      <div className="w-full bg-white border border-gray-300 rounded-lg p-3 md:p-5 shadow-sm">

        <h1 className="text-xl sm:text-2xl font-bold mb-1">
          Category-wise Annual Reports
        </h1>

        <p className="text-gray-500 text-xs mb-6">
          Financial Year 2026-2027
        </p>

        {/* Income Heading */}
        <h2 className="font-bold text-base mb-4">
          Receipts (Income) by Category
        </h2>

        {/* Monthly Collection */}

        <div className="border border-gray-200 rounded-md p-4 mb-4">

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
            <h3 className="font-semibold text-sm">
              Monthly Collection
            </h3>

            <button className="bg-black text-white px-3 py-1 rounded text-xs" onClick={handleDownload}>
              Download PDF
            </button>
          </div>

          <div className="text-right text-xs text-gray-500 mb-2">
             {monthlyCollectionData.length} receipts • ₹{totalAmount.toLocaleString()}
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
  {monthlyCollectionData.map((item) => (
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
                ₹{totalAmount.toLocaleString()}
            </div>

        </div>
      </div>  

        {/* Special Offerings Component */}
        <IncomeByCategory />

        {/* Tithes & Offerings */}

        <div className="border border-gray-200 rounded-md p-4 mb-6">

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
            <h3 className="font-semibold text-sm">
              Tithes & Offerings
            </h3>

            <button className="bg-black text-white px-3 py-1 rounded text-xs" onClick={handleDownload}>
              Download PDF
            </button>
          </div>

          <div className="text-right text-xs text-gray-500 mb-2">
             {tithesOfferingsData.length} receipts • ₹{tithesTotal.toLocaleString()}
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
  {tithesOfferingsData.map((item) => (
    <tr key={item.id}>
      <td className="border border-gray-200 px-2 py-2">{item.id}</td>
      <td className="border border-gray-200 px-2 py-2 text-blue-600">
        {item.receiptNo}
      </td>
      <td className="border border-gray-200 px-2 py-2">{item.date}</td>
      <td className="border border-gray-200 px-2 py-2">{item.title}</td>
      <td className="border border-gray-200 px-2 py-2">{item.payer}</td>
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
              ₹{tithesTotal.toLocaleString()}
            </div>
          </div>

        </div>

        {/* Expense Heading */}

        <h2 className="font-bold text-base mb-4">
          Bills (Expenses) by Category
        </h2>

        {/* Expense Component */}
        <ExpensesByCategory />

      </div>

    </div>
  );
}