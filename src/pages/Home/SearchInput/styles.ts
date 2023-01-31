import styled from "styled-components";

export const SearchContainer = styled.form`
  margin-top: 7.2rem;
`;

export const SearchPublications = styled.div`
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme["base-span"]};
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SearchInputElement = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  margin-top: 1.2rem;
  border-radius: 6px;
  background: none;
  font-size: 1.6rem;
  border: 1px solid ${(props) => props.theme["base-border"]};
  outline: none;
  color: ${(props) => props.theme["base-label"]};

  cursor: pointer;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    color: white;
    border-color: ${(props) => props.theme["base-blue"]};
  }
`;
