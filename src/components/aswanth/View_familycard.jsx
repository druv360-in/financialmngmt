import React from "react";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";

// =========================
// STYLED COMPONENTS
// =========================

const ViewMain = styled.div`
  /* Container styles */ 
`;

const BackBtn = styled.div` 
  position: relative;
  left: 390px;
  top: 60px;
  cursor: pointer;

  i {
    position: relative;
    top: 21px;
    left: 10px;
    font-size: 12px;
  }

  button {
    padding: 4px;
    padding-left: 30px;
    padding-right: 11px;
    font-size: 10px;
    font-weight: 600;
    border-radius: 6px;
    border: 1px solid rgb(227, 227, 227);
    background: white;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    left: 120px;
    top: 40px;
  }

  @media (max-width: 768px) {
    left: 20px;
    top: 20px;

    i {
      top: 18px;
      left: 8px;
      font-size: 11px;
    }

    button {
      font-size: 9px;
      padding-left: 25px;
      padding-right: 10px;
    }
  }
`;

const TopCon = styled.div`
  position: relative;
  left: 470px;
  top: 22px;

  h1 {
    position: relative;
    font-weight: 600;
    font-size: 20px;
    margin: 0;
  }

  p {
    position: relative;
    color: rgb(168, 167, 167);
    font-size: 10px;
    margin: 0;
  }

  @media (max-width: 1024px) {
    left: 200px;
    top: 5px;
  }

  @media (max-width: 768px) {
    left: 20px;
    top: 35px;

    h1 { font-size: 18px; }
    p { font-size: 9px; }
  }
`;

const TopBox = styled.div`
  position: relative;
  left: 635px;
  bottom: 26px;
  width: 105px;
  height: 50px;
  background-color: #dbeafe;
  border: 1px solid #60a5fa;
  border-radius: 6px;

  p {
    position: relative;
    color: #2563eb;
    left: 15px;
    top: 6px;
    font-size: 9px;
    margin: 0;
  }

  h4 {
    position: relative;
    top: 5px;
    left: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #1e40af;
    margin: 0;
  }

  @media (max-width: 1024px) {
    left: 470px;
    bottom: 42px;
  }

  @media (max-width: 768px) {
    left: 20px;
    top: 50px;
    width: 120px;
    height: 55px;

    p { left: 12px; top: 6px; }
    h4 { left: 14px; font-size: 16px; }
  }
`;

const InnerMain = styled.div`
  position: absolute;
  left: 390px;
  height: 155px;
  border: 1px solid rgb(225, 225, 225);
  width: 970px;
  border-radius: 6px;
  background: white;

  h2 {
    position: relative;
    left: 20px;
    top: 20px;
    font-size: 12px;
    font-weight: 500;
    margin: 0;
  }

  @media (max-width: 1024px) {
    width: 700px;
    left: 120px;
    height: 170px;
  }

  @media (max-width: 768px) {
    position: relative;
    left: 20px;
    top: 70px;
    width: 90%;
    height: auto;
    padding-bottom: 30px;

    h2 { left: 15px; top: 15px; }
  }
`;

const InnerCon = styled.div`
  p { font-size: 10px; margin: 0; }
  h3 { font-weight: 600; font-size: 12px; margin: 4px 0 0 0; }

  /* nth-of-type logic from your CSS */
  &:nth-of-type(1) {
    position: relative;
    top: 35px;
    left: 20px;
    @media (max-width: 768px) { left: 15px; top: 30px; }
  }

  &:nth-of-type(2) {
    position: relative;
    top: 2px;
    left: 480px;
    @media (max-width: 1024px) { left: 360px; }
    @media (max-width: 768px) { left: 15px; top: 40px; }
  }

  &:nth-of-type(3) {
    position: relative;
    top: 12px;
    left: 20px;
    @media (max-width: 768px) { left: 15px; top: 50px; }
  }

  &:nth-of-type(4) {
    position: relative;
    bottom: 21px;
    left: 480px;
    @media (max-width: 1024px) { left: 360px; }
    @media (max-width: 768px) { left: 15px; top: 60px; bottom: 0; }
  }
`;

// =========================
// COMPONENT
// =========================

function View_familycard() {
  const navigate = useNavigate();
  const location = useLocation();
  const family = location.state?.family;

  return (
    <ViewMain>
      <BackBtn onClick={() => navigate(-1)}>
        <i>
          <GoArrowLeft />
        </i>
        <button>Back</button>
      </BackBtn>

      <TopCon>
        <h1>{family?.familyName || "Family Name"}</h1>
        <p>Family details and payment history</p>
      </TopCon>

      <TopBox>
        <p>Monthly Collection</p>
        <h4>{family?.amount || "Amount"}</h4>
      </TopBox>

      <InnerMain>
        <h2>Family Information</h2>
        <InnerCon>
          <p>Head of Family</p>
          <h3>{family?.headOfFamily || "Head of Family"}</h3>
        </InnerCon>
        <InnerCon>
          <p>Phone</p>
          <h3>{family?.phone || "Phone"}</h3>
        </InnerCon>
        <InnerCon>
          <p>Email</p>
          <h3>{family?.email || "Email"}</h3>
        </InnerCon>
        <InnerCon>
          <p>Address</p>
          <h3>{family?.address || "Address"}</h3>
        </InnerCon>
      </InnerMain>
    </ViewMain>
  );
}

export default View_familycard;