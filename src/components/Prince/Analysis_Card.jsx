import Income_Status from "./Income_Status";

function Analysis_Card({ receipts }) {

 const totalIncome = receipts.reduce(
  (sum, receipt) => sum + Number(receipt.amount || 0),
  0
);

const categoryMap = {};

receipts.forEach((receipt) => {
  (receipt.categories || []).forEach((cat) => {
    if (!categoryMap[cat.category]) {
      categoryMap[cat.category] = {
        category: cat.category,
        amount: 0,
        receipts: 0,
      };
    }

    categoryMap[cat.category].amount += Number(cat.amount);
    categoryMap[cat.category].receipts += 1;
  });
});

const items = Object.values(categoryMap).map((item) => ({
  ...item,
  percentage:
    totalIncome > 0
      ? ((item.amount / totalIncome) * 100).toFixed(1)
      : 0,
}));
  return (
   <div className="bg-white border border-gray-200 rounded-3xl p-4 sm:p-5 lg:p-6 shadow-sm">

<h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-5">
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
     <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
  <p className="text-[13px] text-blue-600 leading-relaxed">
    <span className="font-semibold text-blue-900">
      ℹ️ Note:
    </span>{" "}
    Each receipt has a primary category amount and may have additional category amounts.
    Category totals reflect the sum of all amounts assigned to that specific category.
  </p>
</div>

    </div>
  );
}

export default Analysis_Card;