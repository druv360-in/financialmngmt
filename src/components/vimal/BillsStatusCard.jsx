export default function BillsStatusCard({
  title,
  value,
  color,
}) {
  return (
    <div
      className="
        bg-white
        border border-gray-200
        rounded-2xl
        px-7 py-6
        min-h-[130px]
        flex flex-col justify-center
      "
    >

      {/* TITLE */}
      <p className="text-[14px] text-gray-500 font-medium">
        {title}
      </p>

      {/* VALUE */}
      <h2
        className={`
          text-[25px]
          leading-none
          font-bold
          mt-4
          ${color}
        `}
      >
        {value}
      </h2>

    </div>
  );
}