import React from "react";
import styled from "styled-components";
import images from "../../assets/images";

const Loader = () => {
  return (
    <>
      <LoaderStyles>
        <div>
          <img src={images.smile} alt="Realice" />
          <h1>Realice</h1>
        </div>
      </LoaderStyles>
    </>
  );
};

export default Loader;
const LoaderStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background: #c7c76d;
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 150px;
      object-fit: cover;
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
    }
  }
`;
