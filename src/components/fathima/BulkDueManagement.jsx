function BulkDueManagement() {

  const handleCreate = () => {
    alert("Bulk Due Created Successfully!")
  }

  return (

    <div className="min-h-screen overflow-y-auto bg-gray-200 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-8xl bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 md:mb-10">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 leading-snug">
              Bulk Dues Management</h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed">
               Create collection events for multiple families at once  </p>
          </div>

          <button onClick={handleCreate}
                  className="w-full lg:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-lg md:text-xl font-medium hover:bg-gray-800 ">
            + Create Bulk Due
          </button>

        </div>

        {/* About Box */}
        <div className="border border-gray-300 rounded-3xl p-4 sm:p-6 md:p-8">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
            About Bulk Due</h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-7 sm:leading-8 md:leading-10 mb-6 sm:mb-8">
            Use this feature to create collection events that apply to multiple families at once, such as:
          </p>

          <ul className="list-disc pl-6 sm:pl-8 md:pl-10 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <li> Mission Sunday collections </li>
            <li> Building fund contributions  </li>
            <li> Special church events  </li>
            <li>Annual membership fees </li>
          </ul>

          {/* Bottom Box */}
          <div className="bg-gray-100 rounded-2xl px-4 sm:px-6 py-4 sm:py-5">
            <p className="text-lg sm:text-xl md:text-2xl font-bold">
                Total Families: 2 </p>
          </div>
        </div>

      </div>

    </div>

  )
}

export default BulkDueManagement