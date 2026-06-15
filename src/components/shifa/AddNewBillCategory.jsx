import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

export default function AddNewBillCategory({
  onClose,
  onAddCategory,
  activeTab,
}) {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');

  const isBillSession = activeTab === 'bills';

  const handleAddCategory = () => {
    if (!categoryName.trim()) {
      alert('Please fill in the category name');
      return;
    }

    const newCategory = {
      id: Date.now(),
      title: categoryName.trim(),
      description: description.trim() || 'No description provided',
    };

    if (onAddCategory) onAddCategory(newCategory);

    setCategoryName('');
    setDescription('');
    if (onClose) onClose();
  };

  const inputStyle =
    'w-full bg-[#f3f3f5] border border-transparent rounded-[6px] px-3 py-1.5 text-[15px] text-slate-800 outline-none placeholder-slate-400 transition-all duration-150 focus:bg-[#f3f3f5] focus:border-slate-400';

  return (
    <div className="w-full max-w-[450px] bg-[#ffffff] rounded-[12px] p-5 shadow-xl relative border border-slate-100 flex flex-col">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <FiX size={16} strokeWidth={2.5} />
      </button>

      <h2 className="text-[19px] font-medium text-center text-[#151515] tracking-tight">
        Add New {isBillSession ? 'Bill' : 'Receipt'} Category
      </h2>

      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-[15px] font-medium text-black">
              Category Name *
            </label>
            <input
              type="text"
              placeholder="e.g., Utilities, Donations"
              value={categoryName}
              onChange={e => setCategoryName(e.target.value)}
              className={inputStyle}
            />
          </div>

          <div className="space-y-1">
            <label className="text-[15px] font-medium text-[#0f172a]">
              Description
            </label>
            <textarea
              rows="2"
              placeholder="Brief description of this category..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              className={`${inputStyle} resize-none`}
            />
          </div>

          <div className="flex items-center gap-2 pt-3 mt-4">
            <button
              type="button"
              onClick={handleAddCategory}
              className="flex-1 h-[36px] bg-[#02040a] text-white text-[13px] font-medium rounded-[6px] hover:bg-black transition-colors"
            >
              Add Category
            </button>
            <button
              type="button"
              onClick={onClose}
              className="h-[36px] px-4 rounded-[6px] border border-slate-200 text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
