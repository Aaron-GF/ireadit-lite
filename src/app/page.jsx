"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInitialPosts } from "@/api/reddit";
import { setPosts } from "@/lib/features/posts/postsSlice";

/* imports components */
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    getInitialPosts().then((data) => dispatch(setPosts(data)));
  }, [dispatch]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {posts.map((p) => (
          <PostCard key={p.data.id} post={p} />
        ))}
      </main>
    </div>
  );
}
