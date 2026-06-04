
import MemberCard from "./MemberCard39";

const familyMembers = [
  {
    id: 1,
    name: "John Smith",
    relation: "Head",
    dob: "15/5/1975",
    phone: "+1 234-567-8900",
    email: "john.smith@email.com",
  },
  {
    id: 2,
    name: "Mary Smith",
    relation: "Spouse",
    dob: "22/8/1978",
    phone: "+1 234-567-8901",
    email: "mary.smith@email.com",
  },
  {
    id: 3,
    name: "Sarah Smith",
    relation: "Daughter",
    dob: "10/3/2005",
    phone: "",
    email: "",
  },
];

const ViewFamilyMembersCard = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Family Members ({familyMembers.length})
      </h2>

      <div className="space-y-3">
        {familyMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default ViewFamilyMembersCard;