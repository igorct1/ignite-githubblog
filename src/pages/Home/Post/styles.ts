import styled from "styled-components";
import { Link } from "react-router-dom";
export const PostContainer = styled(Link)`
  width: 100%;
  text-decoration: none;
  min-height: 260px;

  background: ${(props) => props.theme["base-post"]};
  padding: 3.2rem;
  border-radius: 10px;

  border: 2px solid transparent;

  p {
    color: ${(props) => props.theme["base-text"]};
    line-height: 160%;
    margin-top: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  &:hover {
    border-color: ${(props) => props.theme["base-border"]};
  }
`;

export const PostTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.6rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};
    max-width: 24rem;
    line-height: 160%;
  }
  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0.6rem;
  }
`;
