import styled, { keyframes } from "styled-components";

export const UserProfileContainer = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 3.2rem 4rem;

  margin-top: -10rem;

  border-radius: 10px;

  display: flex;
  gap: 3.2rem;
`;

export const ProfileImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const ProfileDetails = styled.div`
  width: 100%;
  margin-top: 1.4rem;
  header {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 2.4rem;
      color: ${(props) => props.theme["base-title"]};
      font-weight: 700;
      line-height: 0;
    }

    a {
      font-size: 1.2rem;
      color: ${(props) => props.theme["base-blue"]};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 400;

      display: flex;
      gap: 1rem;
      align-items: center;
      border: 1px solid transparent;
      padding-bottom: 0.4rem;
      transition: all 0.2s;
    }
    a:hover {
      border-bottom-color: ${(props) => props.theme["base-blue"]};
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
    margin-top: 0.8rem;
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 2.4rem;
    gap: 2.4rem;
  }

  li {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};

    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
`;
