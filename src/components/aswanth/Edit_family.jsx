import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";

// ==========================================
// STYLED COMPONENTS
// ==========================================

const MainOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.form`
  position: relative;
  width: 420px; /* Marginally widened to avoid squeezing input items */
  max-height: 90vh;
  background-color: white;
  z-index: 500;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 8px;
  border: 1px solid rgb(210, 210, 210);
  padding: 24px;
  box-sizing: border-box;
`;

const BackCon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
  
  button {
    font-size: 14px;
    cursor: pointer;
    background: none;
    border: none;
    color: #666;
    &:hover { color: #000; }
  }
`;

const MainHeading = styled.h2`
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 16px 0;
`;

const SubHeading = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #333;
`;

const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.fullWidth ? "1 1 100%" : "1 1 calc(50% - 6px)")};

  label {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #444;
  }

  input {
    height: 32px;
    background-color: rgb(245, 245, 245);
    border-radius: 6px;
    border: 1px solid transparent;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 12px;
    width: 100%;
    outline: none;

    &:focus {
      border-color: #aaa;
    }
  }
`;

const SmallText = styled.p`
  color: rgb(128, 125, 125);
  font-size: 10px;
  margin: -4px 0 20px 0;
  width: 100%;
`;

const ThirdCon = styled.div`
  h2 {
    font-size: 15px;
    font-weight: 600;
    margin: 20px 0 12px 0;
    color: #222;
  }
`;

const FamilyMemberList = styled.div`
  margin-bottom: 15px;
  max-height: 160px;
  overflow-y: auto;
`;

const FamilyMemberCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 12px;
  background-color: rgb(248, 248, 248);
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 8px;
  box-sizing: border-box;

  .member-left {
    h3 {
      font-size: 12px;
      font-weight: 600;
      margin: 0;
      color: #111;
    }
    p {
      font-size: 11px;
      color: rgb(110, 110, 110);
      margin: 2px 0 0 0;
    }
  }

  .delete-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 28px;
    height: 28px;
    color: #dc2626;
    border-radius: 6px;
    border: 1px solid #fca5a5;
    background-color: white;
    cursor: pointer;

    &:hover {
      background-color: #fef2f2;
    }
  }
`;

const ThirdMemberCard = styled.div`
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 6px;
  padding: 14px;
  margin-bottom: 20px;

  h3 {
    font-size: 12px;
    font-weight: 600;
    margin: 0 0 12px 0;
    color: #166534;
  }

  button {
    height: 32px;
    width: 100%;
    background-color: white;
    color: #166534;
    font-size: 12px;
    font-weight: 600;
    border-radius: 6px;
    border: 1px solid #bbf7d0;
    cursor: pointer;
    margin-top: 4px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #dcfce7;
    }
  }
`;

const MemberInputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
`;

const MemberInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.fullWidth ? "1 1 100%" : "1 1 calc(50% - 5px)")};

  input {
    height: 30px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    padding: 0 8px;
    box-sizing: border-box;
    font-size: 12px;
    width: 100%;
    outline: none;

    &:focus {
      border-color: #166534;
    }

    &::placeholder {
      color: #94a3b8;
    }
  }
`;

const ThirdBtnCon = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;

  button:nth-of-type(1) {
    flex: 1;
    height: 36px;
    border-radius: 6px;
    background-color: #111827;
    color: white;
    font-size: 13px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    &:hover { background-color: #000; }
  }

  button:nth-of-type(2) {
    width: 80px;
    height: 36px;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
    background-color: white;
    color: #334155;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    &:hover { background-color: #f8fafc; }
  }
`;

// ==========================================
// COMPONENT LOGIC
// ==========================================

function Edit_family({ closeModal, familyData }) {
  // Sanitize initial members list array to clean up any blank/corrupt records
  const [members, setMembers] = useState(
    Array.isArray(familyData?.members) 
      ? familyData.members.filter(m => m && (m.name || m.relationship))
      : []
  );

  const [familyName, setFamilyName] = useState(familyData?.familyName || "");
  const [headOfFamily, setHeadOfFamily] = useState(familyData?.headOfFamily || "");
  const [address, setAddress] = useState(familyData?.address || "");
  const [phone, setPhone] = useState(familyData?.phone || "");
  const [email, setEmail] = useState(familyData?.email || "");
  const [amount, setAmount] = useState(familyData?.amount || "");

  // Form input states for creating a member
  const [memberName, setMemberName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [dob, setDob] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberEmail, setMemberEmail] = useState("");

  const deleteMember = (indexToDelete) => {
    setMembers(members.filter((_, index) => index !== indexToDelete));
  };

  const addMember = (e) => {
    e.preventDefault(); // Lock form bubble triggers
    
    if (!memberName.trim() || !relationship.trim()) {
      alert("Member Name and Relationship fields are required!");
      return;
    }

    const newMember = {
      name: memberName.trim(),
      relationship: relationship.trim(),
      dob,
      phone: memberPhone,
      email: memberEmail,
    };

    setMembers([...members, newMember]);

    // Clear tracking states
    setMemberName("");
    setRelationship("");
    setDob("");
    setMemberPhone("");
    setMemberEmail("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateFamily();
  };

  const updateFamily = () => {
    const families = JSON.parse(localStorage.getItem("families")) || [];

    const updatedFamilies = families.map((family) =>
      family.id === familyData?.id
        ? {
            ...family,
            familyName,
            headOfFamily,
            address,
            phone,
            email,
            amount,
            members,
          }
        : family
    );

    localStorage.setItem("families", JSON.stringify(updatedFamilies));
    alert("Family Updated Successfully");
    closeModal();
  };

  return (
    <MainOverlay>
      <ModalContent onSubmit={handleFormSubmit}>
        
        <BackCon>
          <button type="button" onClick={closeModal}>✕</button>
        </BackCon>

        <MainHeading>Edit Family Profile</MainHeading>
        
        <SubHeading>Family Information</SubHeading>
        <InputRow>
          <InputGroup>
            <label>Family Name *</label>
            <input
              type="text"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <label>Head of Family *</label>
            <input
              type="text"
              value={headOfFamily}
              onChange={(e) => setHeadOfFamily(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup fullWidth>
            <label>Address *</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </InputGroup>
        </InputRow>

        <InputRow>
          <InputGroup>
            <label>Phone *</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup fullWidth>
            <label>Monthly Collection Amount ($) *</label>
            <input
              type="text"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </InputGroup>
          <SmallText>Fixed monthly contribution amount for this family</SmallText>
        </InputRow>

        <ThirdCon>
          <h2>Family Members</h2>

          <FamilyMemberList>
            {members.length === 0 ? (
              <p style={{ fontSize: "12px", color: "#888", textAlign: "center", margin: "10px 0" }}>
                No family members added yet.
              </p>
            ) : (
              members.map((member, index) => (
                <FamilyMemberCard key={index}>
                  <div className="member-left">
                    <h3>{member.name}</h3>
                    <p>
                      {member.relationship}
                      {member.dob && ` • Born: ${member.dob}`}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => deleteMember(index)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </FamilyMemberCard>
              ))
            )}
          </FamilyMemberList>

          <ThirdMemberCard>
            <h3>Add member</h3>
            <MemberInputRow>
              <MemberInputGroup>
                <input
                  type="text"
                  placeholder="Name *"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                />
              </MemberInputGroup>

              <MemberInputGroup>
                <input
                  type="text"
                  placeholder="Relationship *"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                />
              </MemberInputGroup>

              <MemberInputGroup>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </MemberInputGroup>

              <MemberInputGroup>
                <input
                  type="number"
                  placeholder="Phone"
                  value={memberPhone}
                  onChange={(e) => setMemberPhone(e.target.value)}
                />
              </MemberInputGroup>

              <MemberInputGroup fullWidth>
                <input
                  type="email"
                  placeholder="Email"
                  value={memberEmail}
                  onChange={(e) => setMemberEmail(e.target.value)}
                />
              </MemberInputGroup>
            </MemberInputRow>

            <button type="button" onClick={addMember}>
              + Add Member to Family
            </button>
          </ThirdMemberCard>

          <ThirdBtnCon>
            <button type="submit">Update Family</button>
            <button type="button" onClick={closeModal}>Cancel</button>
          </ThirdBtnCon>
        </ThirdCon>

      </ModalContent>
    </MainOverlay>
  );
}

export default Edit_family;