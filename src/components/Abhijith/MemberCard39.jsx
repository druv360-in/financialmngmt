
const MemberCard = ({ member }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-4">
      <h3 className="font-semibold text-gray-800">{member.name}</h3>

      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
        <span>{member.relation}</span>
        <span>•</span>
        <span>Born: {member.dob}</span>

        {member.phone && (
          <>
            <span>•</span>
            <span>{member.phone}</span>
          </>
        )}
      </div>

      {member.email && (
        <p className="text-sm text-gray-400 mt-1">{member.email}</p>
      )}
    </div>
  );
};

export default MemberCard;