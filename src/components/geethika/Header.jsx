import { Landmark } from "lucide-react";
import BalanceCard from "./BalanceCard";

const Header = () => {
  return (
    <div className="bg-white border rounded-lg p-5">
      {/* Title */}
      <div className="mb-5">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Landmark size={26} />
          Cash & Bank Management
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Track cash deposits and balance management
        </p>
      </div>

      {/* 3 Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BalanceCard
          title="Cash in Hand"
          amount="-2250.00"
          subtitle="Available cash"
          bg="#ECFDF5"
          amountColor="#166534"
          titleColor="#15803D"
        />

        <BalanceCard
          title="Bank Balance"
          amount="6379.50"
          subtitle="In bank account"
          bg="#EFF6FF"
          amountColor="#1D4ED8"
          titleColor="#2563EB"
        />

        <BalanceCard
          title="Total Balance"
          amount="4129.50"
          subtitle="Cash + Bank"
          bg="#FAF5FF"
          amountColor="#9333EA"
          titleColor="#A855F7"
        />
      </div>
    </div>
  );
};

export default Header;