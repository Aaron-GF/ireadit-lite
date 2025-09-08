export default function PostCard({ post }) {
  const p = post.data;
  const imageUrl =
  post.data.preview?.images?.[0]?.source?.url?.replace(/&amp;/g, "&") ||
  (post.data.thumbnail && post.data.thumbnail.startsWith("http") ? post.data.thumbnail : null);


  return (
    <article className="flex flex-col bg-2/20 rounded-xl w-9/10 p-4">
      <h2>{p.title}</h2>
      {imageUrl && <img src={p.imageUrl} alt={p.title} />}
      <p>
        Posted by {p.author} in r/{p.subreddit}
      </p>
    </article>
  );
}
