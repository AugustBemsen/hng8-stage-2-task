import React from "react";
import styled from "styled-components";
import images from "../../assets/images";
import Skills from "../Skills/Skills";
import Top from "../Top/Top";
import WorkHistory from "../WorkHistory/WorkHistory";

const Body = () => {
  const { bg1, bg2, bg3, bg4 } = images;
  return (
    <>
      <BodyStyles>
        {/* eslint-disable-next-line */}
        <img id="bg1" src={bg1} />

        {/* eslint-disable-next-line */}
        <img id="bg2" src={bg2} />
        <Top />
        <Skills />
        <WorkHistory />

        {/* eslint-disable-next-line */}
        <img id="bg2" src={bg3} />

        {/* eslint-disable-next-line */}
        <img id="bg2" src={bg4} />
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

  #bg1 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
  }

  #bg2 {
    position: absolute;
    bottom: 10px;
    right: 0;
    z-index: 1;
    pointer-events: none;
  }
`;
