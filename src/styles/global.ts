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
}

:focus {
  background-color: ${(props) => props.theme["base-blue"]};
}
`;
