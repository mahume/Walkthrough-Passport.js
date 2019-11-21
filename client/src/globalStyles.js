import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family: monospace;
  }
  body {
    margin: 0;
  }
`;