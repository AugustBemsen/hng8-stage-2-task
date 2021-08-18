import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

${"" /* remove browser defaults and declare general styles */}
    * {
        font-family: 'poppins';
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        background: #E3E3A2;
    }

    .heading-text {
        margin-top: 50px;
    }
    
    .bg1 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
    }

    .bg2 {
        position: absolute;
        bottom: 10px;
        right: 0;
        z-index: 1;
        pointer-events: none;
  }

  @media screen and (max-width: 520px) {

    img {
        display: none;
    }
}
`;

export default GlobalStyle;
