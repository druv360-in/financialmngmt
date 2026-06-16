
import styled from "styled-components";
import Family_stats from "./Family_stats";
import { useState } from "react";
import Add_editfamily from "./Add_editfamily";

const HeadingCon = styled.div`
  position: absolute;
  top: 35px;
  left: 375px;

  @media (max-width: 768px) {
    left: 20px;
    top: 20px;
  }
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SubHeading = styled.p`
  font-weight: 400;
  font-size: 11px;
  color: rgb(133, 130, 130);

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const AddFamilyBtn = styled.div`
  position: absolute;
  left: 1245px;
  top: 50px;

  @media (max-width: 768px) {
    left: 20px;
    top: 90px;
  }
`;

const PlusIcon = styled.i`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 10px;
  color: white;

  @media (max-width: 768px) {
    top: 9px;
    font-size: 9px;
  }
`;

const Button = styled.button`
  font-size: 10px;
  color: white;
  background-color: black;
  padding: 5px;
  padding-left: 30px;
  padding-right: 10px;
  border-radius: 7px;

  @media (max-width: 768px) {
    font-size: 9px;
    padding-left: 26px;
    padding-right: 9px;
  }
`;

const SearchBarCon = styled.div`
  position: absolute;
  top: 200px;
  left: 380px;

  @media (max-width: 768px) {
    left: 20px;
    top: 150px;
  }
`;

const SearchIcon = styled.i`
  color: rgb(208, 208, 208);
  position: absolute;
  top: 8px;
  left: 15px;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
    top: 9px;
  }
`;

const StatsBoxes = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
    top: 170px;
    left: 20px;
    gap: 15px;
  }
`;
function Families_members() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>

      <HeadingCon>
        <Heading>Families & members</Heading>

        <SubHeading>
          Manage church families and member details
        </SubHeading>
      </HeadingCon>

      <AddFamilyBtn>
  <PlusIcon className="fa-solid fa-plus"></PlusIcon>

  <Button onClick={() => setShowModal(true)}>
    Add Family
  </Button>

  {showModal && (
    <Add_editfamily
      closeModal={() => setShowModal(false)}
    />
  )}

</AddFamilyBtn>

      

      <StatsBoxes>

        <Family_stats
          icon={
            <i
              className="fa-regular fa-user"
              style={{ color: "#2563eb", fontSize: "21px" }}
            ></i>
          }
          heading="Total Families"
          value="2"
        />

        <Family_stats
          icon={
            <i
              className="fa-regular fa-user"
              style={{ color: "#16a34a", fontSize: "21px" }}
            ></i>
          }
          heading="Total Members"
          value="5"
        />

        <Family_stats
          icon={
            <i
              className="fa-regular fa-user"
              style={{ color: "#9333ea", fontSize: "21px" }}
            ></i>
          }
          heading="Avg Members/Family"
          value="2.5"
        />

      </StatsBoxes>

    </div>
  );
}

export default Families_members;