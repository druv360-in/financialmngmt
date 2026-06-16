import React, { useState } from "react";
import styled from "styled-components";
import Family_stats from "./Family_stats";
import { FiUsers } from "react-icons/fi";
import Add_editfamily from "./Add_editfamily";
import { LuUser } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";

// --- STYLED COMPONENTS (No Absolute/Relative Offsets) ---

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeadingCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Heading = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 22px;
  color: rgb(17, 24, 39);

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubHeading = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 13px;
  color: rgb(107, 114, 128);

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Button = styled.button`
  display: inline-flex;
  width: 120px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  background-color: #000000;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  height: 31px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(31, 41, 55);
  }

  @media (max-width: 768px) {
    width: 100%; /* Spans full width on mobile devices for easy tap targets */
    font-size: 11px;
  }
`;

const StatsBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 12px;
  }
`;

// --- COMPONENT IMPLEMENTATION ---

function Families_members() {
  const [showModal, setShowModal] = useState(false);
  const families = JSON.parse(localStorage.getItem("families")) || [];

  const totalFamilies = families.length;
  const totalMembers = families.reduce(
    (total, family) => total + (family.members?.length || 0),
    0
  );

  const avgMembersPerFamily =
    totalFamilies > 0 ? (totalMembers / totalFamilies).toFixed(1) : 0;

  return (
    <Container>
      {/* Dynamic Header & Button Wrapper Block */}
      <HeaderRow>
        <HeadingCon>
          <Heading>Families & members</Heading>
          <SubHeading>Manage church families and member details</SubHeading>
        </HeadingCon>

        <Button onClick={() => setShowModal(true)}>
          <FaPlus size={10} />
          Add Family
        </Button>
      </HeaderRow>

      {/* Stats Cards Display Layout */}
      <StatsBoxes>
        <Family_stats
          icon={<FiUsers style={{ color: "##155DFC", fontSize: "20px" }} />}
          heading="Total Families"
          value={totalFamilies}
        />

        <Family_stats
          icon={<LuUser style={{ color: "#00A63E", fontSize: "20px" }} />}
          heading="Total Members"
          value={totalMembers}
        />

        <Family_stats
          icon={<FiUsers style={{ color: "#9810FA", fontSize: "20px" }} />}
          heading="Avg Members/Family"
          value={avgMembersPerFamily}
        />
      </StatsBoxes>

      {showModal && <Add_editfamily closeModal={() => setShowModal(false)} />}
    </Container>
  );
}

export default Families_members;