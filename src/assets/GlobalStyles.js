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
  
`;

export default GlobalStyle;
