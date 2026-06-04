const BalanceCard = ({
  title,
  amount,
  subtitle,
  bg,
  amountColor,
  titleColor,
}) => {
  return (
    <div
      className="rounded-xl border p-5 flex-1 min-h-[120px]"
      style={{ backgroundColor: bg }}
    >
      <h3
        className="text-sm font-semibold"
        style={{ color: titleColor }}
      >
        {title}
      </h3>

      <h2
        className="text-3xl font-bold mt-4"
        style={{ color: amountColor }}
      >
        ₹{amount}
      </h2>

      <p
        className="text-xs mt-2"
        style={{ color: titleColor }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default BalanceCard;