import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.background};

  }
  *{
    font-family: 'Sora', sans-serif;
  }
`;

export default GlobalStyle;
