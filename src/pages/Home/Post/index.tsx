import { PostContainer, PostTitleContainer } from "./styles";
import { IPost } from "../Home";
import { formattedDate } from "../../../utils/formattedDate";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  return (
    <PostContainer to={`/post/${post.number}`}>
      <PostTitleContainer>
        <h1>{post.title}</h1>
        <span>{formattedDate(post.created_at)}</span>
      </PostTitleContainer>
      <p>{post.body}</p>
    </PostContainer>
  );
}
