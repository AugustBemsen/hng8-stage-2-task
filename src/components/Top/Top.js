import React from "react";
import styled from "styled-components";

const Top = () => {
  return (
    <>
      <TopStyles>
        <h1>Daniel Bemsen</h1>
        <h3>Frontend Developer</h3>
        <p>
          Hello, I’m Daniel Bemsen Akosu, a solution focused Software Engineer
          with experience in frontend web-based applications, using modern
          technologies in building state-of-the-art, easy to use, user-friendly
          websites and applications with passion.
        </p>
      </TopStyles>
    </>
  );
};

export default Top;
const TopStyles = styled.div`
  h3 {
    margin: 15px 0;
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 50px;
  }

  p {
    font-weight: 300;
  }
`;
