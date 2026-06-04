import Income_Status from "./Income_Status";

function Analysis_Card() {

  const items = [
    {
      category: "Tithes & Offerings",
      amount: 2500,
      receipts: 1,
      percentage: 58.8,
    },

    {
      category: "Special Offerings",
      amount: 1000,
      receipts: 1,
      percentage: 23.5,
    },

    {
      category: "Monthly Collection",
      amount: 750,
      receipts: 1,
      percentage: 17.6,
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm">

      {/* TITLE */}
      <h2 className="text-[20px] sm:text-[22px] font-semibold text-gray-900 mb-5">
        Category-wise Income Breakdown
      </h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        {items.map((item, index) => (
          <Income_Status
            key={index}
            item={item}
          />
        ))}

      </div>

      {/* NOTE */}
      <div className="mt-5 bg-blue-50 border border-blue-200 rounded-2xl px-4 py-3">

        <p className="text-blue-700 text-[13px] sm:text-sm leading-relaxed">
          ℹ️ Note: Each receipt has a primary category amount and may have additional category amounts.Category totals reflect the sum of all amounts assigned to that specific category. 
        </p>

      </div>

    </div>
  );
}

export default Analysis_Card;