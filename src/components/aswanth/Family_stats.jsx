import styled from "styled-components";

const Card = styled.div`
  position: relative;
  top: 100px;
  left: 376px;
  width: 316px;
  height: 79px;
  border-radius: 10px;
  border: 1px solid rgb(230, 229, 229);

  /* MOBILE */
 
  @media (max-width: 768px) {
    left: 0px;
    top: 0px;
    width: 90%;
    height: 75px;
  }
`;

const IconCon = styled.div`
  position: absolute;
  top: 20px;
  left: 19px;
  font-weight: 700;
  font-size: 20px;

  /* MOBILE */

  @media (max-width: 768px) {
    top: 18px;
    left: 16px;
    font-size: 18px;
  }
`;

const Heading = styled.h2`
  position: relative;
  top: 20px;
  left: 50px;
  font-size: 10px;
  font-weight: 400;
  color: rgb(84, 83, 83);

  /* MOBILE */

  @media (max-width: 768px) {
    top: 18px;
    left: 45px;
    font-size: 9px;
  }
`;

const Value = styled.p`
  position: relative;
  top: 15px;
  left: 49px;
  font-weight: 700;
  font-size: 18px;

  /* MOBILE */

  @media (max-width: 768px) {
    top: 14px;
    left: 45px;
    font-size: 16px;
  }
`;

function Family_stats({ heading, value, icon }) {
  return (
    <Card>
      <IconCon>{icon}</IconCon>

      <Heading>{heading}</Heading>

      <Value>{value}</Value>
    </Card>
  );
}

export default Family_stats;