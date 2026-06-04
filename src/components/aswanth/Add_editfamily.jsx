import React, { useState } from "react";
import styled from "styled-components";

// ==========================================
// STYLED COMPONENTS (Cleaned of brittle positions)
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
  width: 420px;
  max-height: 90vh;
  background-color: white;
  z-index: 500;
  border-radius: 8px;
  border: 1px solid rgb(210, 210, 210);
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 480px) {
    width: 92%;
    padding: 16px;
  }
`;

const BackCon = styled.div`
  display: flex;
  justify-content: flex-end;
  
  button {
    background: none;
    border: none;
    font-size: 14px;
    cursor: pointer;
    color: #666;
    padding: 4px;
    &:hover { color: #000; }
  }
`;

const MainHeading = styled.h2`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
`;

const SubHeading = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 4px 0 0 0;
  color: #333;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// Responsive grid that sets 2 elements per row or full-width based on properties
const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: ${(props) => (props.fullWidth ? "span 2" : "auto")};

  @media (max-width: 400px) {
    grid-column: span 1;
  }
`;

const Label = styled.label`
  font-size: 11px;
  font-weight: 600;
  color: #444;
`;

const Input = styled.input`
  height: 32px;
  width: 100%;
  background-color: rgb(242, 242, 242);
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 12px;
  outline: none;

  &:focus {
    border-color: #aaa;
  }

  &::placeholder {
    font-size: 11px;
    color: #aaa;
  }

  ${(props) => props.address && `
    height: 45px;
  `}
`;

const SmallText = styled.p`
  color: rgb(128, 125, 125);
  font-size: 10px;
  margin: -4px 0 4px 0;
`;

const ThirdCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    font-size: 15px;
    font-weight: 600;
    margin: 8px 0 0 0;
    color: #222;
  }
`;

const ThirdMemberCard = styled.div`
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 6px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 12px;
    font-weight: 600;
    margin: 0;
    color: #166534;
  }

  /* Internal action button specifically styled for adding members */
  .add-member-action-btn {
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

const MemberInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: ${(props) => (props.fullWidth ? "span 2" : "auto")};

  @media (max-width: 400px) {
    grid-column: span 1;
  }

  input {
    height: 30px;
    width: 100%;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    padding: 0 8px;
    box-sizing: border-box;
    font-size: 12px;
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
  margin-top: 8px;

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

function Add_editfamily({ closeModal }) {
  const [familyName, setFamilyName] = useState("");
  const [headOfFamily, setHeadOfFamily] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const [memberName, setMemberName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [dob, setDob] = useState("");
  const [memberPhone, setMemberPhone] = useState("");
  const [memberEmail, setMemberEmail] = useState("");

  const [members, setMembers] = useState([]);

  const addMember = (e) => {
    e.preventDefault(); // Prevents layout bubbling submissions

    if (!memberName.trim() || !relationship.trim()) {
      alert("Name and Relationship are required to add a family member.");
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

    // Resets controlled tracking fields cleanly
    setMemberName("");
    setRelationship("");
    setDob("");
    setMemberPhone("");
    setMemberEmail("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addFamily();
  };

  const addFamily = () => {
    const familyData = {
      id: Date.now(),
      familyName,
      headOfFamily,
      address,
      phone,
      email,
      amount,
      members,
    };

    const existingFamilies = JSON.parse(localStorage.getItem("families")) || [];
    existingFamilies.push(familyData);
    localStorage.setItem("families", JSON.stringify(existingFamilies));

    // Reset parent view states
    setMembers([]);
    setFamilyName("");
    setHeadOfFamily("");
    setAddress("");
    setPhone("");
    setEmail("");
    setAmount("");

    alert("Family Added Successfully");
    closeModal();
  };

  return (
    <MainOverlay>
      <ModalContent onSubmit={handleFormSubmit}>
        
        <BackCon>
          <button type="button" onClick={closeModal}>✕</button>
        </BackCon>

        <MainHeading>Add New Family</MainHeading>

        <FormSection>
          <SubHeading>Family Information</SubHeading>
          
          <InputGrid>
            <InputGroup>
              <Label>Family Name *</Label>
              <Input
                type="text"
                placeholder="e.g., Smith Family"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>Head of Family *</Label>
              <Input
                type="text"
                placeholder="e.g., John Smith"
                value={headOfFamily}
                onChange={(e) => setHeadOfFamily(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup fullWidth>
              <Label>Address *</Label>
              <Input
                full
                address
                type="text"
                placeholder="Full address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>Phone *</Label>
              <Input
                type="number"
                placeholder="+91 234-567-8900"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>Email *</Label>
              <Input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup fullWidth>
              <Label>Monthly Collection Amount ($) *</Label>
              <Input
                full
                type="text"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </InputGroup>
          </InputGrid>
          
          <SmallText>Fixed monthly contribution amount for this family</SmallText>
        </FormSection>

        <ThirdCon>
          <h2>Family Members ({members.length})</h2>

          <ThirdMemberCard>
            <h3>Add member</h3>
            
            <InputGrid>
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
                  placeholder="Phone *"
                  value={memberPhone}
                  onChange={(e) => setMemberPhone(e.target.value)}
                />
              </MemberInputGroup>

              <MemberInputGroup fullWidth>
                <input
                  type="text"
                  placeholder="Email *"
                  value={memberEmail}
                  onChange={(e) => setMemberEmail(e.target.value)}
                />
              </MemberInputGroup>
            </InputGrid>

            <button type="button" className="add-member-action-btn" onClick={addMember}>
              + Add Member to Family
            </button>
          </ThirdMemberCard>
          
          <ThirdBtnCon>
            <button type="submit">Add Family</button>
            <button type="button" onClick={closeModal}>Cancel</button>
          </ThirdBtnCon>
        </ThirdCon>

      </ModalContent>
    </MainOverlay>
  );
}

export default Add_editfamily;