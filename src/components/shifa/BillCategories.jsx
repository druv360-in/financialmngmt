import React, { useState, useEffect } from 'react'; // 💡 Added useEffect here
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { HiOutlineTag } from 'react-icons/hi';
import EditCategory from './EditCategory';

export default function BillCategories({
  activeTab,
  billCategories = [],
  setBillCategories,
  receiptCategories = [],
  setReceiptCategories,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const currentCategories =
    (activeTab === 'bills' ? billCategories : receiptCategories) || [];

  const handleUpdate = (id, newTitle, newDescription) => {
    const updateMap = cat =>
      cat.id === id
        ? { ...cat, title: newTitle, description: newDescription }
        : cat;

    if (activeTab === 'bills') {
      if (setBillCategories) setBillCategories(billCategories.map(updateMap));
    } else {
      if (setReceiptCategories)
        setReceiptCategories(receiptCategories.map(updateMap));
    }

    setToast({ show: true, message: `"${newTitle}" successfully edited!` });
    setSelectedCategory(null); // Closes the modal
  };

  const handleDeleteClick = item => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${item.title}"?`
    );

    if (confirmDelete) {
      if (activeTab === 'bills') {
        if (setBillCategories)
          setBillCategories(billCategories.filter(cat => cat.id !== item.id));
      } else {
        if (setReceiptCategories)
          setReceiptCategories(
            receiptCategories.filter(cat => cat.id !== item.id)
          );
      }

      setToast({
        show: true,
        message: `"${item.title}" successfully deleted!`,
      });
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3.5">
        {currentCategories.length > 0 &&
          currentCategories.map(item => (
            <div
              key={item.id}
              className="border border-[#e2e8f0] rounded-[15px] bg-white p-4 flex items-start gap-3.5"
            >
              <div
                className={`w-[42px] h-[42px] rounded-[12px] flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${
                  activeTab === 'bills' ? 'bg-[#dbeaff]' : 'bg-[#dbfce7]'
                }`}
              >
                <HiOutlineTag
                  className={`transition-colors duration-150 ${
                    activeTab === 'bills' ? 'text-[#386ee0]' : 'text-[#38ad63]'
                  }`}
                  size={19}
                />
              </div>

              {/* 💡 Content wrapper changed to flex column on mobile, row on desktop */}
              <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  {/* Title can now expand fully on mobile */}
                  <p className="text-[18px] font-medium text-[#0f172a] leading-tight break-words">
                    {item.title}
                  </p>
                  <p className="text-[14px] text-[#64748b] mt-1.5 tracking-wide whitespace-normal break-words leading-normal">
                    {item.description}
                  </p>
                </div>

                {/* 💡 Buttons move to the bottom on mobile, side on desktop */}
                <div className="flex items-center gap-1.5 flex-shrink-0 self-end md:self-start mt-2 md:mt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(item)}
                    className="w-9 h-8 rounded-[8px] border border-[#e2e8f0] flex items-center justify-center text-[#94a3b8] hover:border-slate-400 hover:text-slate-700 transition-all duration-150"
                  >
                    <FiEdit2 size={16} strokeWidth={2.2} color="black" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteClick(item)}
                    className="w-9 h-8 rounded-[8px] border border-[#e2e8f0] flex items-center justify-center text-[#ef4444] hover:bg-red-50 hover:border-red-100 transition-all duration-150"
                  >
                    <FiTrash2 size={16} strokeWidth={2.8} />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedCategory(null)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px]"
          />
          <div className="relative z-10 w-full flex justify-center">
            <EditCategory
              categoryData={selectedCategory}
              onClose={() => setSelectedCategory(null)}
              onUpdate={handleUpdate}
            />
          </div>
        </div>
      )}

      {toast.show && (
        <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-2.5 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4">
          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
            <svg
              className="w-3 h-3 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <span className="text-[13.5px] font-medium text-slate-100 tracking-wide pr-1">
            {toast.message}
          </span>
        </div>
      )}
    </div>
  );
}