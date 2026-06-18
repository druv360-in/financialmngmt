import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%; 
  height: 76px;
  background-color: #ffffff;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
  padding: 0 16px;
  margin-top: 0px;
  box-sizing: border-box;
`;

const IconCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: rgb(243, 244, 246);
  flex-shrink: 0;
`;

const TextCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: rgb(107, 114, 128);
`;

const Value = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  color: rgb(17, 24, 39);
`;

function Family_stats({ heading, value, icon }) {
  return (
    <Card>
      <IconCon>{icon}</IconCon>
      <TextCon>
        <Heading>{heading}</Heading>
        <Value>{value}</Value>
      </TextCon>
    </Card>
  );
}

export default Family_stats;