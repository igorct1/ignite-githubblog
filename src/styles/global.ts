import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Nunito', sans-serif;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  height: 100vh;
  background: ${(props) => props.theme["base-background"]};
}

:focus {
  background: transparent;
  border: 1px solid ${(props) => props.theme["base-blue"]};

}
`;
