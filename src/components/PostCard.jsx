"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function PostCard({ posts }) {
  const p = posts;
  const videoRef = useRef(null);

  const hasVideo = p.is_video && p.media?.reddit_video?.hls_url;
  const hasImage = !p.is_video && p.preview?.images?.[0]?.source?.url;

  useEffect(() => {
    if (hasVideo && videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(p.media.reddit_video.hls_url);
        hls.attachMedia(videoRef.current);

        return () => {
          hls.destroy();
        };
      } else if (
        videoRef.current.canPlayType("application/vnd.apple.mpegurl")
      ) {
        // Safari soporta HLS nativo
        videoRef.current.src = p.media.reddit_video.hls_url;
      }
    }
  }, [hasVideo, p]);

  return (
    <article className="flex flex-col gap-5 bg-2/20 rounded-xl w-9/10 p-5">
      <h2>{p.title}</h2>

      {hasVideo && (
        <video
          ref={videoRef}
          controls
          className="object-contain overflow-hidden rounded-lg sm:h-100"
        />
      )}

      {hasImage && (
        <img
          src={hasImage.replace(/&amp;/g, "&")}
          alt={p.title}
          className="object-contain overflow-hidden rounded-lg sm:h-100"
        />
      )}

      {!hasImage && !hasVideo && p.selftext && <p>{p.selftext}</p>}

      <p>
        Posted by {p.author} in r/{p.subreddit}
      </p>
      <div className="flex flex-col items-center w-12">
        <button className="text-gray-500 hover:text-orange-500">🔼</button>
        <span className="text-sm font-semibold">{p.score}</span>
        <button className="text-gray-500 hover:text-blue-500">🔽</button>
      </div>
    </article>
  );
}
