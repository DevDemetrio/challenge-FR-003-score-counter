import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

body{
  font-family: 'Montserrat', sans-serif;
}

  /* Box sizing rule for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Reset styles for specific elements */
  div, header, span, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


`;

export default GlobalStyled;