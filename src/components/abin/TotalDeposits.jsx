function TotalDeposits({ title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="text-2xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}

export default TotalDeposits;