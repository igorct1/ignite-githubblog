import styled from "styled-components";

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme["base-background"]};
`;

export const LayoutContainerWrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0rem 2rem;
`;
