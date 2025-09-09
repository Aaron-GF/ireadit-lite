"use client"

export default function PostCard({ posts }) {
  const p = posts;

  // check post content
  const isImage = p.preview?.[0]?.source?.url;
  const isVideo = p.is_video && p.media?.reddit_video?.fallback_url;

  return (
    <article className="flex flex-col gap-5 bg-2/20 rounded-xl w-9/10 p-5">
      <h2>{p.title}</h2>

      {isImage && <img src={isImage.replace(/&amp;/g, "&")} alt={p.title} className="object-contain overflow-hidden rounded-lg sm:h-100"/>}

      {isVideo && <video controls src={p.media.reddit_video.fallback_url} alt={p.title} className="object-contain overflow-hidden rounded-lg sm:h-100"/>}

      {!isImage && !isVideo && <p>{p.selftext}</p>}

      <p>
        Posted by {p.author} in r/{p.subreddit}
      </p>
    </article>
  );
}
