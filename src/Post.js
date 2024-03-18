export const Post = ({ post }) => {
  return (
    <article className="content">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Post Id: {post.id}</p>
    </article>
  );
};
