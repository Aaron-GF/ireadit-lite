"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInitialPosts } from "@/app/api/reddit";
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
      <header className="fixed w-full top-0 z-10 bg-background">
        <Header />
      </header>
      <main className="flex flex-col gap-5 items-center py-25">
        {posts.map((p) => (
          <PostCard key={p.data.id} post={p} />
        ))}
      </main>
    </div>
  );
}
