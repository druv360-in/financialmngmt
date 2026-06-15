function Income_Status({ item }) {

  // DEFAULT DATA
  const data = item || {
    category: "Tithes & Offerings",
    amount: 2500,
    receipts: 2,
    percentage: 58.8,
  };

  return (
    <div className="max-w-md">

      <div className="bg-white border border-gray-200 hover:border-green-300   rounded-2xl px-5 py-4 bg-linear-to-br from-green-50 to-white transition-all  ">

        {/* CATEGORY */}
        <h2 className="text-sm font-semibold text-gray-700">
          {data.category}
        </h2>

        {/* AMOUNT + PROGRESS */}
        <div className="flex items-center justify-between gap-4 mt-3">

          {/* AMOUNT */}
          <div>

            <h1 className="text-2xl font-bold text-green-600 whitespace-nowrap">
              ₹{data.amount.toFixed(2)}
            </h1>

            {/* RECEIPTS */}
            <p className="text-[11px] text-gray-400 mt-1">
              {data.receipts} receipt
            </p>

          </div>

          {/* RIGHT SIDE */}
        <div className="w-20">

            {/* PERCENTAGE */}
            <p className="text-[11px] text-gray-500 text-right mb-1">
              {data.percentage}%
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

              <div
                style={{
                  width: `${data.percentage}%`,
                }}
                className="h-full bg-linear-to-r from-green-500 to-emerald-600 rounded-full"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Income_Status;