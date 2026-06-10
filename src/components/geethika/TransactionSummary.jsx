const Row = ({ label, value, bg, color }) => {
  return (
    <div
      className="flex justify-between px-6 py-5 rounded-xl mb-4 text-xl"
      style={{ backgroundColor: bg, color }}
    >
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
};

const TransactionSummary = () => {
  return (
    <div className="bg-white rounded-2xl border p-8 mt-10">
      <h2 className="text-3xl font-bold mb-8 text-[#0f172a]">
        Transaction Summary
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Cash Transactions</h3>

          <Row label="Opening Balance" value="₹0.00" bg="#f8fafc" />
          <Row
            label="Total Cash Receipts"
            value="+₹3250.00"
            bg="#ecfdf5"
            color="#16a34a"
          />
          <Row
            label="Total Cash Bills"
            value="-₹0.00"
            bg="#fef2f2"
            color="#dc2626"
          />
          <Row
            label="Deposited to Bank"
            value="-₹5500.00"
            bg="#eff6ff"
            color="#2563eb"
          />
          <Row
            label="Current Cash Balance"
            value="₹-2250.00"
            bg="#dcfce7"
            color="#166534"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Bank Transactions</h3>

          <Row label="Opening Balance" value="₹0.00" bg="#f8fafc" />
          <Row
            label="Total Bank Receipts"
            value="+₹10000.00"
            bg="#ecfdf5"
            color="#16a34a"
          />
          <Row
            label="Total Bank Bills"
            value="-₹120.50"
            bg="#fef2f2"
            color="#dc2626"
          />
          <Row
            label="Received from Cash"
            value="+₹5500.00"
            bg="#eff6ff"
            color="#2563eb"
          />
          <Row
            label="Current Bank Balance"
            value="₹6379.50"
            bg="#dbeafe"
            color="#1d4ed8"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;