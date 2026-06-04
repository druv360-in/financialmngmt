import { useState } from "react"

function FamilyDuePayment(){

  const [amount, setAmount] = useState("200")
  const [method, setMethod] = useState("")
  const [showModal] = useState(true)
  const [otherAmount, setOtherAmount] = useState("")

  const handlePayment = () => {
  alert("Payment Recorded Successfully!")
}

const handleCancel = () => {
  alert("Payment Cancelled!")
}

const handleClose = () => {
  alert("Modal Closed!")
}

if (!showModal) {
  return null
}

  return(
  <div className="min-h-screen overflow-y-auto bg-gray-200 flex items-center justify-center p-4 sm:p-6">
    <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 relative">
      <button
         onClick={handleClose}
         className="absolute top-4 right-4 sm:top-6 sm:right-6 text-2xl text-gray-400 hover:text-black">×
      </button>

      <h1 className="text-2xl sm:text-3xl md:text-[20px] font-bold mb-6 sm:mb-7 leading-snug">
        Record Payment for Annual Church Fund
      </h1>

      <div className="bg-gray-50 rounded-xl p-4 sm:p-5 mb-6 sm:mb-7 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
            <p className="text-gray-500 text-sm sm:text-base md:text-lg"> Total Amount:</p>
            <p className="font-semibold text-sm sm:text-base md:text-lg"> $1000.00 </p>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-gray-300">
            <p className="text-gray-500 text-sm sm:text-base md:text-lg"> Already Paid:</p>
            <p className="font-semibold text-sm sm:text-base md:text-lg"> $800.00</p>
        </div>
        <div className="flex justify-between items-center pt-4">
            <p className="text-gray-500 text-sm sm:text-base md:text-lg"> Remaining:</p>
            <p className="font-bold text-red-500 text-sm sm:text-base md:text-lg"> $200.00</p>
        </div>
      </div>
        
      <div className="mb-5">
         <label className="block text-sm sm:text-base md:text-lg font-semibold mb-2"> Payment Amount *
         </label>
        <input type="number" value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className=" w-full border bg-gray-100 border-gray-300 rounded-xl px-4 py-3 text-sm sm:text-base md:text-lg outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 "/>
      </div> 

      <div className="mb-5">
         <label className="block text-sm sm:text-base md:text-lg font-semibold mb-2"> Other Amount
         </label>
        <input type="number" value={otherAmount}
               onChange={(e) => setOtherAmount(e.target.value)}
               placeholder="Enter other amount"
               className="w-full border bg-gray-100 border-gray-300 rounded-xl px-4 py-3 text-sm sm:text-base md:text-lg outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"/>
      </div>    

      <div className="mb-7">
         <label className="block text-sm sm:text-base md:text-lg font-semibold mb-2"> Payment Method *
         </label>
        <select value={method}
            onChange={(e) => setMethod(e.target.value)}
            className=" w-full border bg-gray-100 border-gray-300 rounded-xl px-4 py-3 text-sm sm:text-base md:text-lg outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300">
              <option value=""> Select method</option>
              <option> Cash</option>
              <option> UPI </option>
              <option> Card </option>
              <option>Bank Transfer</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
         <button onClick={handlePayment}
                 className="flex-1 bg-black text-white py-3 rounded-xl text-sm sm:text-base md:text-lg font-medium hover:bg-gray-800">
                     Record Payment
         </button>
         <button onClick={handleCancel}
                 className="w-full sm:w-auto px-8 py-3 border border-gray-300 rounded-xl text-sm sm:text-base md:text-lg hover:bg-gray-100 ">
                      Cancel
         </button>
      </div>
        
    </div>

  </div>
  )
}

export default FamilyDuePayment