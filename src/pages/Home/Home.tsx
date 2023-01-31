import React from "react";
import { Loading } from "../../components/Loading";
import { api } from "../../lib";
import { Post } from "./Post";
import { SearchInput } from "./SearchInput";
import { HomeContainer, PostsContainer } from "./style";
import { UserProfile } from "./UserProfile";

const username = "igorct1";
const repo = "ignite-githubblog";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Home() {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const [isLoading, setLoading] = React.useState(false);

  const fetchPosts = React.useCallback(async (query: string = "") => {
    const url = `search/issues?q=${query}%20repo:${username}/${repo}`;
    try {
      setLoading(true);
      const response = await api.get(url);

      setPosts(response.data.items);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <HomeContainer>
      <UserProfile />
      <SearchInput fetchPosts={fetchPosts} postsLength={posts.length} />
      {isLoading ? (
        <Loading />
      ) : (
        <PostsContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsContainer>
      )}
    </HomeContainer>
  );
}
