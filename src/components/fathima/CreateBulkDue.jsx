import { useState } from "react"
import { Users } from "lucide-react"

function CreateBulkDue() {

  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [year, setYear] = useState("2026")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [searchFamily, setSearchFamily] = useState("")

  const [submitted, setSubmitted] = useState(false)

  const familyList = [
    { id: 1, family: "Smith Family", name: "John Smith" },
    { id: 2, family: "Johnson Family", name: "Robert Johnson" },
    { id: 3, family: "Williams Family", name: "David Williams" },
    { id: 4, family: "Brown Family", name: "James Brown" },
    { id: 5, family: "Davis Family", name: "Michael Davis" },
    { id: 6, family: "Miller Family", name: "Daniel Miller" },
    { id: 7, family: "Wilson Family", name: "Joseph Wilson" },
  ]

  const filteredFamilies = familyList.filter((item) =>
    item.family.toLowerCase().includes(searchFamily.toLowerCase()) ||
    item.name.toLowerCase().includes(searchFamily.toLowerCase())
  )

  const [selectedFamilies, setSelectedFamilies] = useState([])

  const handleFamilySelect = (id) => {
    if (selectedFamilies.includes(id)) {
      setSelectedFamilies(
        selectedFamilies.filter((item) => item !== id)
      )
    } else {
      setSelectedFamilies([
        ...selectedFamilies,
        id
      ])
    }
  }

  const handleSelectAll = () => {
    if (selectedFamilies.length === familyList.length) {
      setSelectedFamilies([])
    } else {
      setSelectedFamilies(
        familyList.map((family) => family.id)
      )
    }
  }

  const handleCreate = () => {
    setSubmitted(true)
    if (
      !title ||
      !amount ||
      !dueDate ||
      !year ||
      !category ||
      !description ||
      selectedFamilies.length === 0
    ) {
      return
    }
    alert("Bulk Due Created Successfully!")
  }

  const handleCancel = () => {
    alert("Creation Cancelled!")
  }

  const handleClose = () => {
    alert("Modal Closed!")
  }

  return (

    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">

      {/* Modal */}
      <div
        className="
          bg-white
          w-full
          max-w-[550px]
          rounded-2xl
          shadow-xl
          p-5
          relative
        "
      >

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="
            absolute
            top-4
            right-4
            text-xl
            text-gray-400
            hover:text-black
          "
        >
          ×
        </button>

        {/* Heading */}
        <h1 className="text-[16px] font-bold mb-5">
          Create Bulk Due Collection
        </h1>

        {/* Collection Details */}
        <div className="border border-gray-200 rounded-2xl p-4 mb-4">

          <h2 className="text-[15px] font-bold mb-4">
            Collection Details
          </h2>

          {/* Title */}
          <div className="mb-4">

            <label className="block text-sm font-semibold mb-2">
              Collection Title *
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Mission Sunday, Building Fund"
              className={`
                w-full
                bg-gray-100
                border
                rounded-lg
                px-4
                py-2
                text-sm
                outline-none
                focus:ring-2
                focus:ring-gray-300 focus:border-gray-300

                ${
                  submitted && !title
                    ? "border-red-500"
                    : "border-gray-100"
                }
              `}
            />

          </div>

          {/* Amount + Due Date */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">

            <div>

              <label className="block text-sm font-semibold mb-2">
                Amount Per Family *
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className={`
                  w-full
                  bg-gray-100
                  border
                  rounded-lg
                  px-4
                  py-2
                  text-sm
                  outline-none
                  focus:ring-2
                focus:ring-gray-300 focus:border-gray-300

                  ${
                    submitted && !amount
                      ? "border-red-500"
                      : "border-gray-100"
                  }
                `}
              />

            </div>

            <div>

              <label className="block text-sm font-semibold mb-2">
                Due Date *
              </label>

              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className={`
                  w-full
                  bg-gray-100
                  border
                  rounded-lg
                  px-4
                  py-2
                  text-sm
                  outline-none
                  focus:ring-2
                focus:ring-gray-300 focus:border-gray-300
                  ${
                    submitted && !dueDate
                      ? "border-red-500"
                      : "border-gray-100"
                  }
                `}
              />

            </div>

          </div>

          {/* Year + Category */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">

            <div>

              <label className="block text-sm font-semibold mb-2">
                Year *
              </label>

              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className={`
                  w-full
                  bg-gray-100
                  border
                  rounded-lg
                  px-4
                  py-2
                  text-sm
                  outline-none
                  focus:ring-2
                focus:ring-gray-300 focus:border-gray-300

                  ${
                    submitted && !year
                      ? "border-red-500"
                      : "border-gray-100"
                  }
                `}
              />

            </div>

            <div>

              <label className="block text-sm font-semibold mb-2">
                Category *
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`
                  w-full
                  bg-gray-100
                  border
                  rounded-lg
                  px-4
                  py-2
                  text-sm
                  outline-none
                  focus:ring-2
                focus:ring-gray-300 focus:border-gray-300

                  ${
                    submitted && !category
                      ? "border-red-500"
                      : "border-gray-100"
                  }
                `}
              >
                <option value="">Select category</option>
                <option>Tithes & Offerings</option>
                <option>Special Offerings</option>
                <option>Building Fund</option>
                <option>Mission Fund</option>
                <option>Monthly Collection</option>
                <option>Donations</option>
                <option>Other</option>
              </select>

            </div>

          </div>

          {/* Description */}
          <div>

            <label className="block text-sm font-semibold mb-2">
              Description
            </label>

            <textarea
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Additional notes about this collection..."
              className={`
                w-full
                bg-gray-100
                border
                rounded-lg
                px-4
                py-2
                text-sm
                resize-none
                outline-none
                focus:ring-2
                focus:ring-gray-300 focus:border-gray-300

                ${
                  submitted && !description
                    ? "border-red-500"
                    : "border-gray-100"
                }
              `} />

          </div>
        </div>

        {/* Select Families */}
        <div className="border border-gray-200 rounded-2xl p-4 mb-5">

          <h2 className="text-[15px] font-bold mb-4">
            Select Families
          </h2>

          {/* Search */}
          <div className="mb-4">

            <input
              type="text"
              value={searchFamily}
              onChange={(e) => setSearchFamily(e.target.value)}
              placeholder="Search families..."
              className={` w-full bg-gray-100 border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300
                ${
                  submitted && selectedFamilies.length === 0
                    ? "border-red-500"
                    : "border-gray-200"
                } `} />

          </div>

          {/* Select All */}
          <div className="flex justify-between items-center mb-3">

            <p className="text-sm font-semibold">
              Family List
            </p>

            <label className="flex items-center gap-2 cursor-pointer">

              <input
                type="checkbox"
                checked={
                  selectedFamilies.length === familyList.length
                }
                onChange={handleSelectAll}
                className="  w-4  h-4 accent-gray-500"/>

             <span className="text-sm font-medium">
                 Select All ({familyList.length})
             </span>
            </label>
          </div>

          {/* Family List */}
          <div
            className={` border rounded-xl p-3 space-y-2 max-h-[70px] overflow-y-auto
              ${
                submitted && selectedFamilies.length === 0
                  ? "border-red-500"
                  : "border-gray-200"
              } `} >

            {filteredFamilies.map((item) => (

              <label
                key={item.id}
                className="
                  flex
                  items-center
                  gap-3
                  cursor-pointer  ">

                <input
                  type="checkbox"
                  checked={selectedFamilies.includes(item.id)}
                  onChange={() => handleFamilySelect(item.id)}
                  className="w-4 h-4 accent-gray-500"/>

                <div className="text-sm">
                  <span className="font-bold">
                    {item.family}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {item.name}
                  </span>
                </div>
              </label>
            ))}
          </div>

          {/* Error */}
          {submitted && selectedFamilies.length === 0 && (

            <p className="text-red-500 text-xs mt-2">
              Please select at least one family
            </p>

          )}

          {/* Selected Count */}
          {selectedFamilies.length > 0 && (

            <div
               className=" bg-blue-50 rounded-xl px-2 py-1 flex items-center gap-2 mt-3">

              <Users className="text-blue-600 w-4 h-4" />

              <p className="text-blue-700 text-sm font-medium">
                {selectedFamilies.length === 1
                  ? "1 family selected"
                  : `${selectedFamilies.length} families selected`}
                {" "}•{" "}
                Total: $
                {(
                  Number(amount || 0) * selectedFamilies.length
                ).toFixed(2)}
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button
            onClick={handleCreate}
            className="
              flex-1
              bg-black
              text-white
              py-2
              rounded-xl
              text-sm
              font-semibold
              hover:bg-gray-800
            " >
            Create Dues for {selectedFamilies.length}{" "}
            {selectedFamilies.length === 1
              ? "Family"
              : "Families"}
          </button>

          <button
            onClick={handleCancel}
            className="
              px-6
              py-2
              border
              border-gray-300
              rounded-xl
              text-sm
              hover:bg-gray-100
            "
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  )
}

export default CreateBulkDue