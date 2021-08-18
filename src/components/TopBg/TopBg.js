import React from "react";
import styled from "styled-components";
import images from "../../assets/images";

const TopBg = () => {
  const { bg1, bg2 } = images;

  return (
    <>
      <TopBgStyles>
        {/* eslint-disable-next-line */}
        <img className="bg1" src={bg1} />

        {/* eslint-disable-next-line */}
        <img className="bg2" src={bg2} />
      </TopBgStyles>
    </>
  );
};

export default TopBg;
const TopBgStyles = styled.div`

`;
