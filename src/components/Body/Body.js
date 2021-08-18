import React from "react";
import styled from "styled-components";
import Assets from "../Assets/Assets";
import Skills from "../Skills/Skills";
import Top from "../Top/Top";
import TopBg from "../TopBg/TopBg";
import WorkHistory from "../WorkHistory/WorkHistory";

const Body = () => {
  return (
    <>
      <BodyStyles>
        <TopBg />
        <Top />
        <Skills />
        <WorkHistory />
        <Assets />
      </BodyStyles>
    </>
  );
};

export default Body;
const BodyStyles = styled.div`
  width: 80%;
  background: transparent;
  padding: 2rem;
  margin: 3rem auto;
  border-radius: 50px;
  border: 10px solid #ffffff;
  position: relative;
`;
