import { Pencil, Trash2 } from "lucide-react";

function Receipt_Card({ receipts }) {

  const defaultReceipts = [
    {
      title: "Sunday Offering",
      receiptNo: "RCP1000",
      paymentMethod: "Cash",
      payer: "Congregation",
      category: "Tithes & Offerings",
      date: "2026-04-13",
      amount: 2500,
      description: "Weekly Sunday offering collection",
    },

    {
      title: "Building Fund Donation",
      receiptNo: "RCP1001",
      paymentMethod: "Check",
      payer: "John Smith",
      category: "Special Offerings",
      date: "2026-04-14",
      amount: 1000,
      description: "Special donation for building renovation",
    },
  ];

  const data = receipts || defaultReceipts;

  if (!data.length) {
    return (
      <div className="text-center py-12 border border-dashed border-gray-300 rounded-3xl text-gray-500 bg-white">
        No receipts found
      </div>
    );
  }

  return (
    <div className="space-y-3">

      {data.map((receipt, index) => (

        <div
          key={index}
          className="border border-gray-200 rounded-3xl bg-white px-5 py-4 hover:shadow-md transition-all"
        >

          <div className="flex items-center justify-between gap-6">

            <div className="flex-1 min-w-0">

              <div className="flex flex-wrap items-center gap-2">

                <h2 className="text-[21px] font-semibold text-gray-900">
                  {receipt.title}
                </h2>

                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-[10px] font-medium">
                  {receipt.receiptNo}
                </span>

                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-[10px] font-medium">
                  {receipt.paymentMethod}
                </span>

              </div>

              <div className="flex flex-wrap items-center gap-2 mt-3 text-[13px] text-gray-600">

                <p>
                  Payer:
                  <span className="font-medium ml-1">
                    {receipt.payer}
                  </span>
                </p>

                <span className="text-gray-300">•</span>

                <p>
                  Category:
                  <span className="font-medium ml-1">
                    {receipt.category}
                  </span>
                </p>

                <span className="text-gray-300">•</span>

                <p>
                  Date:
                  <span className="font-medium ml-1">
                    {new Date(receipt.date).toLocaleDateString("en-GB")}
                  </span>
                </p>

              </div>

              <p className="mt-3 text-[12px] text-gray-500 leading-relaxed">
                {receipt.description}
              </p>

            </div>

            <div className="flex flex-col items-end justify-center min-w-[120px]">

              <h2 className="text-[24px] font-bold text-green-600 whitespace-nowrap">
                ₹{receipt.amount}.00
              </h2>

              <div className="flex gap-2 mt-3">

                <button className="w-9 h-9 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-100">
                  <Pencil className="w-4 h-4 text-gray-700" />
                </button>

                <button className="w-9 h-9 border border-gray-300 rounded-xl flex items-center justify-center hover:bg-red-50">
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default Receipt_Card;