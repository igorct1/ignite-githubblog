import styled from "styled-components";
import bg from "../../assets/header-bg.png";
export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 6.4rem 0rem 13.4rem;
`;

export const HeaderContent = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;
