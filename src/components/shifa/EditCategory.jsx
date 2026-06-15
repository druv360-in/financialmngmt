import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export default function EditCategory({ categoryData, onClose, onUpdate }) {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (categoryData) {
      setCategoryName(categoryData.title || '');
      setDescription(categoryData.description || '');
    }
  }, [categoryData]);

  const handleUpdateCategory = () => {
    if (!categoryName.trim()) {
      alert('Please fill out the category name.');
      return;
    }
    if (onUpdate) {
      onUpdate(categoryData.id, categoryName, description);
    }
    onClose();
  };

  return (
    <div className="bg-white w-full max-w-[440px] rounded-[14px] p-5 relative font-sans antialiased shadow-xl border border-gray-100">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
      >
        <FiX size={16} />
      </button>

      {/* Heading */}
      <h2 className="text-[16px] font-bold text-[#0f172a] tracking-tight">
        Edit Category
      </h2>

      {/* Form Fields */}
      <div className="mt-4 space-y-3.5">
        {/* Category Name Input */}
        <div>
          <label className="text-[12px] font-semibold text-[#0f172a]">
            Category Name *
          </label>
          <input
            type="text"
            value={categoryName}
            onChange={e => setCategoryName(e.target.value)}
            className="w-full mt-1 border border-gray-200 rounded-[10px] px-3 py-2 text-[13px] text-[#0f172a] outline-none focus:border-slate-400 bg-[#f8fafc]"
          />
        </div>

        {/* Description Textarea */}
        <div>
          <label className="text-[12px] font-semibold text-[#0f172a]">
            Description
          </label>
          <textarea
            rows="3"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full mt-1 border border-gray-200 rounded-[10px] px-3 py-2 text-[13px] text-[#0f172a] outline-none resize-none focus:border-slate-400 bg-[#f8fafc]"
          ></textarea>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end gap-2 pt-2">
          <button
            onClick={handleUpdateCategory}
            className="bg-black hover:bg-zinc-900 text-white text-[12px] font-semibold px-4 h-[36px] rounded-[8px] transition-all"
          >
            Update Category
          </button>
          <button
            onClick={onClose}
            className="px-4 rounded-[8px] border border-gray-200 text-[12px] font-semibold h-[36px] text-slate-700 hover:bg-slate-50 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
