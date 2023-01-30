import styled from "styled-components";
import bg from "../../assets/header-bg.png";
export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background: url(${bg}) no-repeat;
  background-size: cover;
  padding: 6.4rem 0rem 14rem;
`;

export const HeaderContent = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;
