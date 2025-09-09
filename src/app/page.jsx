import { Suspense } from "react";

import { getInitialPosts } from "@/app/api/reddit";

/* imports components */
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getInitialPosts("popular");

  return (
    <div>
      <header className="fixed w-full top-0 z-10 bg-background">
        <Header />
      </header>
      <main className="flex flex-col gap-5 items-center py-25">
        <Suspense fallback={<p>Loading...</p>}>
          {posts.map((p) => (
            <PostCard key={p.data.id} posts={p} />
          ))}
        </Suspense>
      </main>
    </div>
  );
}
