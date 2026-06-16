import React, { useState, useEffect } from 'react'; // 💡 Added useEffect here
import { Plus } from 'lucide-react';
import { CategoryStatus } from './CategoryStatus';
import AddNewBillCategory from '../shifa/AddNewBillCategory';
import BillCategories from '../shifa/BillCategories';

const initialBillCategories = [
  { id: 1, title: 'Utilities', description: 'Water, electricity, gas' },
  { id: 2, title: 'Maintenance', description: 'Building repairs and upkeep' },
  { id: 3, title: 'Salaries', description: 'Staff salaries and wages' },
  { id: 4, title: 'Supplies', description: 'Office and church supplies' },
  { id: 5, title: 'Other', description: 'Miscellaneous expenses' },
];

const initialReceiptCategories = [
  {
    id: 1,
    title: 'Tithes & Offerings',
    description: 'Regular tithes and offerings',
  },
  {
    id: 2,
    title: 'Special Offerings',
    description: 'Special occasion offerings',
  },
  { id: 3, title: 'Building Fund', description: 'Building project donations' },
  {
    id: 4,
    title: 'Mission Fund',
    description: 'Mission and outreach donations',
  },
  {
    id: 5,
    title: 'Monthly Collection',
    description: 'Fixed monthly family contributions',
  },
  { id: 6, title: 'Donations', description: 'General donations' },
  { id: 7, title: 'Other', description: 'Other income sources' },
];

export const CategoryManagement = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('bills'); // 'bills' or 'receipts'

  const [billCategories, setBillCategories] = useState(initialBillCategories);
  const [receiptCategories, setReceiptCategories] = useState(
    initialReceiptCategories
  );

  const [toast, setToast] = useState({ show: false, message: '' });

  
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 2000);

      return () => clearTimeout(timer); 
    }
  }, [toast.show]);

  
  const handleAddNewCategory = newCategory => {
    if (activeTab === 'bills') {
      setBillCategories(prev => [...prev, newCategory]);
    } else {
      setReceiptCategories(prev => [...prev, newCategory]);
    }
    setToast({
      show: true,
      message: `"${newCategory.title}" successfully added!`,
    });
  };

  return (
    <div className="w-full relative space-y-5 font-sans antialiased text-[#0f172a] bg-[#f9fafc]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between w-full gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-[#0f172a]">
            Category Management
          </h1>
          <p className="text-[14px] text-[#6a727c] mt-[2px]">
            Manage categories for bills and receipts
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="h-[36px] px-[14px] sm:mt-[8px] sm:mr-[8px] rounded-[8px] bg-[#03060a] text-white flex items-center justify-center gap-1.5 text-[15px] font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap flex-shrink-0 self-start sm:self-auto"
        >
          <Plus size={16} strokeWidth={2.5} />
          Add Category
        </button>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 w-full">
        <CategoryStatus title="Bill Categories" count={billCategories.length} />
        <CategoryStatus
          title="Receipt Categories"
          count={receiptCategories.length}
        />
      </div>

      {/* 1. Master Tab Switcher Bar */}
      <div className="w-full bg-[#eef2f6] p-[4px] rounded-full flex items-center h-[40px] mt-6">
        <button
          type="button"
          onClick={() => setActiveTab('bills')}
          className={`flex-1 text-center py-2 text-[14px] font-medium rounded-full transition-all duration-150 ${
            activeTab === 'bills'
              ? 'bg-white text-[#0f172a] shadow-sm'
              : 'text-[#64748b] hover:text-[#0f172a]'
          }`}
        >
          Bill Categories
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('receipts')}
          className={`flex-1 text-center py-2 text-[14px] font-medium rounded-full transition-all duration-150 ${
            activeTab === 'receipts'
              ? 'bg-white text-[#0f172a] shadow-sm'
              : 'text-[#64748b] hover:text-[#0f172a]'
          }`}
        >
          Receipt Categories
        </button>
      </div>

      
      <div className="w-full bg-white border border-[#e2e8f0] rounded-[21px] p-4 sm:p-7 shadow-sm">
        <h2 className="text-[16px] font-medium text-[#0f172a] mb-5 tracking-tight capitalize">
          {activeTab === 'bills' ? 'Bill' : 'Receipt'} Categories
        </h2>

        
        <BillCategories
          activeTab={activeTab}
          billCategories={billCategories}
          setBillCategories={setBillCategories}
          receiptCategories={receiptCategories}
          setReceiptCategories={setReceiptCategories}
        />
      </div>

     
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setIsAddModalOpen(false)}
            className="fixed inset-0 bg-black/40 "
          />
          <div className="relative z-10 w-full flex justify-center">
            <AddNewBillCategory
              onClose={() => setIsAddModalOpen(false)}
              activeTab={activeTab}
              onAddCategory={handleAddNewCategory}
            />
          </div>
        </div>
      )}

      {/* Minimal Top Center Popup Alert Layout */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-2.5 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-full shadow-lg transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4">
          {/* Clean Success Ring Icon */}
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

          {/* Message Text */}
          <span className="text-[13.5px] font-medium text-slate-100 tracking-wide pr-1">
            {toast.message}
          </span>
        </div>
      )}
    </div>
  );
};
