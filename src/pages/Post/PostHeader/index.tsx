import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Loading } from "../../../components/Loading";
import { formattedDate } from "../../../utils/formattedDate";
import { IPost } from "../../Home/Home";
import { PostHeaderContainer, PostHeaderInfo, PostHeaderLinks } from "./styles";

interface PostHeaderProps {
  post: IPost;
  isLoading: boolean;
}

export function PostHeader({ post, isLoading }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PostHeaderLinks>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              Voltar
            </Link>
            <Link to={`${post.html_url}`} target="_blank">
              Ver no github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </PostHeaderLinks>
          <h1>{post.title}</h1>

          <PostHeaderInfo>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {post?.user?.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate(post.created_at)}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {post.comments}{" "}
              {post.comments === 0
                ? "comentários"
                : post.comments === 1
                ? "comentário"
                : "comentários"}
            </li>
          </PostHeaderInfo>
        </>
      )}
    </PostHeaderContainer>
  );
}
