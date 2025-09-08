/* call initial posts */
export async function getInitialPosts(subreddit = "popular") {
  const res = await fetch(`/api/posts?subreddit=${subreddit}`);
  const text = await res.text();
  console.log(JSON.parse(text));
  return JSON.parse(text);
}
