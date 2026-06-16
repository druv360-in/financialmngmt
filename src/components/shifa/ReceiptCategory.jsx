// import React from "react";
// import { FiEdit2, FiTrash2 } from "react-icons/fi";
// import { HiOutlineTag } from "react-icons/hi";

// const categories = [
//   {
//     title: "Tithes & Offerings",
//     description: "Regular tithes and offerings",
//   },
//   {
//     title: "Special Offerings",
//     description: "Special occasion offerings",
//   },
//   {
//     title: "Building Fund",
//     description: "Building project donations",
//   },
//   {
//     title: "Mission Fund",
//     description: "Mission and outreach donations",
//   },
//   {
//     title: "Monthly Collection",
//     description: "Fixed monthly family contributions",
//   },
//   {
//     title: "Donations",
//     description: "General donations",
//   },
//   {
//     title: "Other",
//     description: "Other income sources",
//   },
// ];

// export default function ReceiptCategory() {

//   // Delete Function
//   const handleDelete = (title) => {
//     alert(`${title} Deleted`);
//   };

//   // Edit Function
//   const handleEdit = (title) => {
//     alert(`Edit ${title}`);
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] p-6">

//       {/* Tabs */}
//       <div className="bg-[#e5e7eb] rounded-full flex overflow-hidden h-12">

//         <button className="flex-1 text-[16px] font-medium text-black">
//           Bill Categories
//         </button>

//         <button className="flex-1 bg-white rounded-full text-[16px] font-semibold text-black shadow-sm">
//           Receipt Categories
//         </button>

//       </div>

//       {/* Main Container */}
//       <div className="mt-8 bg-white border border-gray-200 rounded-3xl p-6">

//         {/* Heading */}
//         <h2 className="text-[28px] font-semibold text-[#111827] mb-8">
//           Receipt Categories
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//           {categories.map((item, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 rounded-2xl bg-white p-5 flex items-start justify-between"
//             >

//               {/* Left */}
//               <div className="flex items-start gap-4">

//                 {/* Icon */}
//                 <div className="w-12 h-12 rounded-2xl bg-[#dcfce7] flex items-center justify-center">
//                   <HiOutlineTag className="text-[#16a34a] text-[22px]" />
//                 </div>

//                 {/* Text */}
//                 <div>

//                   <h3 className="text-[20px] font-semibold text-[#0f172a]">
//                     {item.title}
//                   </h3>

//                   <p className="text-[15px] text-gray-500 mt-1">
//                     {item.description}
//                   </p>

//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex items-center gap-2">

//                 {/* Edit */}
//                 <button
//                   onClick={() => handleEdit(item.title)}
//                   className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
//                 >
//                   <FiEdit2 className="text-[18px] text-black" />
//                 </button>

//                 {/* Delete */}
//                 <button
//                   onClick={() => handleDelete(item.title)}
//                   className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-red-50 transition"
//                 >
//                   <FiTrash2 className="text-[18px] text-red-500" />
//                 </button>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// }