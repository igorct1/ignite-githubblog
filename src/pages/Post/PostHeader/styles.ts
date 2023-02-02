import styled from "styled-components";

export const PostHeaderContainer = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 3.2rem 4rem;

  margin-top: -10rem;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const PostHeaderLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;
  a {
    font-size: 1.2rem;
    color: ${(props) => props.theme["base-blue"]};
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    border: 1px solid transparent;
  }

  a:hover {
    border-bottom-color: ${(props) => props.theme["base-blue"]};
  }

  a svg {
    margin-top: -0.2rem;
  }
`;

export const PostHeaderInfo = styled.ul`
  display: flex;
  gap: 3.2rem;
  list-style: none;

  li {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    color: ${(props) => props.theme["base-span"]};
  }
`;
