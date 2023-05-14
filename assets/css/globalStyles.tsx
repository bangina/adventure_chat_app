import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.black};
    padding: 0;
    margin: 0;
    font-family: AppleSDGothicNeo;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
    outline: none;
    appearance: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
