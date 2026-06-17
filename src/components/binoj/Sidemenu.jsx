import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "./Icon";

export const NAV_ITEMS = [
  { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
  { label: "Bills", icon: "bills", path: "/bills" },
  { label: "Receipts", icon: "receipts", path: "/receipts" },
  { label: "Categories", icon: "categories", path: "/categories" },
  { label: "Families", icon: "families", path: "/families" },
  { label: "Bulk Dues", icon: "bulkDues", path: "/bulk-dues" },
  { label: "Unpaid Dues", icon: "unpaidDues", path: "/unpaid-dues" },
  { label: "Cash & Bank", icon: "cashBank", path: "/cash-bank" },
  { label: "Journal", icon: "ledger", path: "/ledger" },
  { label: "Reports", icon: "reports", path: "/reports" },
  { label: "Settings", icon: "settings", path: "/settings" },
];

function getActiveLabel(pathname) {
  const activeItem = NAV_ITEMS.find((item) => item.path === pathname);
  return activeItem?.label || "Dashboard";
}

export default function Sidemenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const active = getActiveLabel(location.pathname);

  function handleNavigate(path) {
    navigate(path);
    setIsOpen(false);
  }

  return (
    <>
      <header className="lg:hidden sticky top-0 z-10 bg-white border-b border-gray-100 flex items-center gap-3 px-4 py-3 shadow-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <Icon name="menu" size={28} />
        </button>

        <span className="font-semibold text-gray-800 text-sm">
          {active}
        </span>
      </header>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-10 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <aside
        className={`fixed top-0 left-0 h-screen w-58 bg-white border-r border-gray-100
          flex flex-col z-20 shadow-sm transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex items-center gap-4 px-8 py-8 border-b border-gray-100 shrink-0">
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow">
            <Icon name="church" size={26} className="text-white" />
          </div>

          <div>
            <p className="font-bold text-gray-800 text-lg leading-tight">Church</p>
            <p className="text-gray-400 text-[12px]">Management</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-4">
          {NAV_ITEMS.map(({ label, icon, path }) => {
            const isActive = location.pathname === path;

            return (
              <button
                key={label}
                type="button"
                onClick={() => handleNavigate(path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5
                  text-sm font-medium transition-all duration-200 group text-left
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`}
              >
                <Icon
                  name={icon}
                  size={24}
                  className={`shrink-0 transition-colors duration-200
                    ${
                      isActive
                        ? "text-blue-500"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                />

                {label}

                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="px-5 py-3 border-t border-gray-100 shrink-0">
          <p className="text-[11px] text-gray-400">
            Financial Records System
          </p>
        </div>
      </aside>
    </>
  );
}