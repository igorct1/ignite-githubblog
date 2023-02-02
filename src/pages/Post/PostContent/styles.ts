import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 3.2rem;
  margin-bottom: 8rem;
  p {
    color: ${(props) => props.theme["base-text"]};
  }
  img {
    width: 100%;
  }
  h1,
  h2,
  h3,
  a {
    color: ${(props) => props.theme["base-blue"]};
    text-decoration: none;
  }
  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
  pre {
    background: ${(props) => props.theme["base-post"]};
    padding: 1.6rem;
    border-radius: 2px;
    margin-top: 2.4rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;
