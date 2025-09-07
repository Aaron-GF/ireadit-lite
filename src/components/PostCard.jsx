export default function PostCard({ post }) {
  return (
    <article>
      <h2>{post.data.title}</h2>
      <p>
        Posted by {post.data.author} in r/{post.data.subreddit}
      </p>
    </article>
  );
}
