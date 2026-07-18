import FinancialYearBanner from '../components/binoj/FinancialYearBanner'
import Sidemenu from '../components/binoj/Sidemenu'
import TotalDisplayCards from '../components/binoj/TotalDisplayCards'
import CurrentBalances from '../components/binoj/CurrentBalances'
import RecentBills from '../components/vimal/RecentBills'
import RecentCards from '../components/vimal/RecentCards'

const recentBills = [
  {
    id: 1,
    title: "Water Service",
    subtitle: "City Water Department",
    amount: "₹120.50",
    status: "Paid",
    date: "20/04/2026",
  },
  {
    id: 2,
    title: "Electricity Bill",
    subtitle: "Power Company",
    amount: "₹450.00",
    status: "Pending",
    date: "25/04/2026",
  },
  {
    id: 3,
    title: "Internet Bill",
    subtitle: "Airtel Broadband",
    amount: "₹999.00",
    status: "Overdue",
    date: "15/04/2026",
  },
]

const recentReceipts = [
  {
    id: 1,
    title: "Monthly Collection",
    subtitle: "John Smith",
    amount: "₹750.00",
    status: "Cash",
    date: "15/04/2026",
  },
  {
    id: 2,
    title: "Building Fund Donation",
    subtitle: "Mary Thomas",
    amount: "₹1000.00",
    status: "Bank Transfer",
    date: "14/04/2026",
  },
  {
    id: 3,
    title: "Sunday Offering",
    subtitle: "Congregation",
    amount: "₹2500.00",
    status: "Online",
    date: "13/04/2026",
  },
  {
    id: 4,
    title: "Youth Ministry Donation",
    subtitle: "Samuel",
    amount: "₹300.00",
    status: "Check",
    date: "12/04/2026",
  },
  {
    id: 5,
    title: "Special Contribution",
    subtitle: "George",
    amount: "₹500.00",
    status: "Credit Card",
    date: "11/04/2026",
  },
  {
    id: 6,
    title: "Anonymous Donation",
    subtitle: "Unknown",
    amount: "₹200.00",
    status: "Other",
    date: "10/04/2026",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidemenu left untouched, handled externally via layout properties */}
      <Sidemenu />

      {/* Main content wrapper with exact padding matching your sidebar width */}
      <main className="flex-1 lg:pl-58 w-full min-h-screen">
        {/* Full screen layout container supporting fluid 4K scaling up to 2560px max width */}
        <div className="w-full p-4 md:p-6 lg:p-8 space-y-6 mx-auto max-w-[2560px]">
          <FinancialYearBanner />
          <TotalDisplayCards />
          
          {/* Kept separated and stacked vertically as requested */}
          <CurrentBalances />

          <RecentCards
            recentBills={recentBills}
            recentReceipts={recentReceipts}
          />
        </div>
      </main>
    </div>
  )
}