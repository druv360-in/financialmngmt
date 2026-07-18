import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";

function View_familycard() {
  const navigate = useNavigate();
  const location = useLocation();

  const family = location.state?.family;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
        
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center px-3 py-2 text-xs font-semibold rounded-md border border-gray-200 bg-white"
            >
              <GoArrowLeft size={16} />
              <span className="hidden md:inline ml-1">Back</span>
            </button>

            <div>
              <h1 className="text-2xl md:text-[28px] font-semibold leading-tight">
                {family?.familyName || "Smith Family"}
              </h1>

              <p className="text-xs text-gray-400">
                Family details and payment history
              </p>
            </div>
          </div>

          {/* Monthly Collection - Mobile */}
          <div className="md:hidden mt-3 w-35 h-15 bg-green-100 border border-green-400 rounded-lg p-2">
            <p className="text-[10px] text-green-600 text-center">
              Monthly Collection
            </p>

            <h4 className="text-xl font-semibold text-green-900 text-center">
              {family?.amount || "₹250.00"}
            </h4>
          </div>
        </div>

        {/* Monthly Collection - Desktop */}

        <div className="hidden md:block w-64 h-16 bg-green-100 border border-green-400 rounded-lg p-3">
          <p className="text-xs text-green-600 text-center">
            Monthly Collection
          </p>

          <h4 className="text-2xl font-semibold text-green-900 text-center">
            {family?.amount || "₹250.00"}
          </h4>
        </div>
      </div>

      {/* Family Information */}
      <div className="w-full bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-base font-semibold mb-6">
          Family Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-32">
          <div>
            <p className="text-xs text-gray-500">
              Head of Family
            </p>

            <h3 className="text-sm font-semibold mt-1">
              {family?.headOfFamily || "John Smith"}
            </h3>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Phone
            </p>

            <h3 className="text-sm font-semibold mt-1">
              {family?.phone || "+1 234-567-8900"}
            </h3>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Email
            </p>

            <h3 className="text-sm font-semibold mt-1">
              {family?.email || "john.smith@email.com"}
            </h3>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Address
            </p>

            <h3 className="text-sm font-semibold mt-1">
              {family?.address || "123 Church Street, Springfield"}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_familycard;