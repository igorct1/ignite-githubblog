import styled from "styled-components";

export const HomeContainer = styled.main`
  padding-bottom: 10rem;
`;

export const PostsContainer = styled.div`
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  gap: 3.2rem;
`;
