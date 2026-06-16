import { 
  Wallet, 
  Building2, 
  TrendingUp, 
  TrendingDown, 
  ArrowDownToLine, 
  ArrowUpFromLine 
} from "lucide-react";

// Updated Row component to accept and render an icon dynamically
const Row = ({ label, value, bg, color, icon: Icon }) => {
  return (
    <div
      className="flex justify-between items-center bg-white rounded-2xl border border-gray-200 p-5 mb-3"
      style={{ backgroundColor: bg, color }}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon size={18} />}
        <span>{label}</span>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  );
};

const TransactionSummary = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-8 text-[#0f172a]">
        Transaction Summary
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Cash Transactions Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Wallet size={22} color="#16a34a" />
            Cash Transactions
          </h3>

          <Row 
            label="Opening Balance" 
            value="₹0.00" 
            bg="#f8fafc" 
            color="#64748b"
            icon={TrendingUp} 
          />
          <Row
            label="Total Cash Receipts"
            value="+₹3250.00"
            bg="#ecfdf5"
            color="#16a34a"
            icon={TrendingUp}
          />
          <Row
            label="Total Cash Bills"
            value="-₹0.00"
            bg="#fef2f2"
            color="#dc2626"
            icon={TrendingDown}
          />
          <Row
            label="Deposited to Bank"
            value="-₹5500.00"
            bg="#eff6ff"
            color="#2563eb"
            icon={ArrowDownToLine}
          />
          <div className="border-t border-gray-300 my-5"></div>
          <Row
            label="Current Cash Balance"
            value="₹-2250.00"
            bg="#dcfce7"
            color="#166534"
          />
        </div>

        {/* Bank Transactions Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Building2 size={22} color="#2563eb" />
            Bank Transactions
          </h3>

          <Row 
            label="Opening Balance" 
            value="₹0.00" 
            bg="#f8fafc" 
            color="#64748b"
            icon={TrendingUp} 
          />
          <Row
            label="Total Bank Receipts"
            value="+₹1000.00" // Fixed to match screenshot value of +₹1000.00
            bg="#ecfdf5"
            color="#16a34a"
            icon={TrendingUp}
          />
          <Row
            label="Total Bank Bills"
            value="-₹120.50"
            bg="#fef2f2"
            color="#dc2626"
            icon={TrendingDown}
          />
          <Row
            label="Received from Cash"
            value="+₹5500.00"
            bg="#eff6ff"
            color="#2563eb"
            icon={ArrowUpFromLine}
          />
          <div className="border-t border-gray-300 my-5"></div>
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