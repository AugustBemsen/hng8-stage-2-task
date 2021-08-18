import React from "react";
import styled from "styled-components";
import images from "../../assets/images";

const Body = () => {
  const { bg1, bg2, bg3, bg4 } = images;
  return (
    <>
      <BodyStyles>
        <div id="wrapper">
          <img id="bg1" src={bg1} />
          <img id="bg2" src={bg2} />

          <img id="bg2" src={bg3} />
            <img id="bg2" src={bg4} />
        </div>
      </BodyStyles>
    </>
  );
};

export default Body;
const BodyStyles = styled.div``;
