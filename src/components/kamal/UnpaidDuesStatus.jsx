function UnpaidDuesStatus({
  title,
  value,
  cardStyle,
  textStyle,
}) {
  return (
    <div
      className={`h-[98px] w-full xl:w-1/3 rounded-[22px] border px-6 py-5 ${cardStyle}`}
    >

      <p className="text-sm font-medium text-gray-600">
        {title}
      </p>

      <h2
        className={`mt-2 text-2xl font-bold leading-none ${textStyle}`}
      >
        {value}
      </h2>

    </div>
  );
}

export default UnpaidDuesStatus;