import React from "react";
import styled from "styled-components";

const Assets = () => {
  return (
    <>
      <AssetsStyles>
        <div class="assets">
          <h1>ASSETS</h1>

          <div class="links">
            <a href="https://twitter.com/Dani_reptor" class="link">
              Twitter
            </a>
            <a href="https://github.com/augustbemsen" class="link">
              Github
            </a>
            <a href="mailto:danielbemsen@gmail.com" class="link">
              danielbemsen@gmail.com
            </a>
            <a href="tel:07037030402" class="link">
              +2347037030402
            </a>
          </div>
        </div>
      </AssetsStyles>
    </>
  );
};

export default Assets;
const AssetsStyles = styled.div``;
