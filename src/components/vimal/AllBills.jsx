import { useState } from "react";

import MonthlyBills from "../vimal/MonthlyBills";

export default function AllBills({
  groupedBills,
  onEditBill,
  onDeleteBill,
}) {

  const [search, setSearch] = useState("");

  /* -------------------------------- */
  /* FILTERED GROUPS */
  /* -------------------------------- */

  const filteredGroups = groupedBills
    .map((group) => {

      const filteredBills = group.bills.filter(
        (bill) => {

          const query = search.toLowerCase();

          return (
            bill.title
              .toLowerCase()
              .includes(query) ||

            bill.vendor
              .toLowerCase()
              .includes(query) ||

            bill.category
              .toLowerCase()
              .includes(query)
          );
        }
      );

      return {
        ...group,
        bills: filteredBills,
      };
    })

    /* REMOVE EMPTY MONTHS */
    .filter(
      (group) => group.bills.length > 0
    );

  return (
    <div className="space-y-3">

      {/* SEARCH BAR */}
      <div className="bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-3">

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search bills by title, vendor, or category..."
          className="
            w-full
            outline-none
            text-sm
            text-gray-600
            placeholder:text-gray-400
          "
        />

      </div>

      {/* MONTHLY GROUPS */}
      <div className="space-y-3">

        {filteredGroups.length > 0 ? (

          filteredGroups.map((group) => (

            <MonthlyBills
              key={group.month}
              month={group.month}
              bills={group.bills}
              onEditBill={onEditBill}
              onDeleteBill={onDeleteBill}
            />

          ))

        ) : (

          /* NO RESULTS */
          <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">

            <h2 className="text-lg font-semibold text-gray-700">
              No bills found
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Try searching another title,
              vendor, or category.
            </p>

          </div>

        )}

      </div>

    </div>
  );
} 