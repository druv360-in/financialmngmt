import RecentBills from "../vimal/RecentBills";

export default function RecentCards({
  recentBills,
  recentReceipts,
}) {
  return (

    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-6
      "
    >

      {/* RECENT BILLS */}
      <RecentBills
        title="Recent Bills"
        bills={recentBills}
        variant="bill"
      />

      {/* RECENT RECEIPTS */}
      <RecentBills
        title="Recent Receipts"
        bills={recentReceipts}
        variant="receipt"
      />

    </div>

  );
}