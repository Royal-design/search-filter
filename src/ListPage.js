import { Post } from "./Post";

export const ListPage = ({ searchResults }) => {
  const result = searchResults.map((post) => (
    <Post key={post.id} post={post} />
  ));
  const content = result.length ? result : <p>No Page</p>;
  return <div>{content}</div>;
};
