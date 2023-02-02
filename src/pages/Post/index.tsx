import React from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { api } from "../../libs/axios";
import { IPost } from "../Home/Home";
import { PostContent } from "./PostContent";
import { PostHeader } from "./PostHeader";

const username = "igorct1";
const repo = "github-blog";

export function Post() {
  const [post, setPost] = React.useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = React.useState(false);

  const { number } = useParams();
  const fetchPost = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `repos/${username}/${repo}/issues/${number}`
      );
      setPost(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [post]);

  React.useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <PostHeader post={post} isLoading={isLoading} />
      <PostContent content={post.body} />
    </>
  );
}
