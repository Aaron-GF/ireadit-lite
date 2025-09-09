/* call initial posts */
export async function getInitialPosts(subreddit = "popular") {
  const res = await fetch(`https://www.reddit.com/r/${subreddit}.json?raw_json=1`);
  const data = await res.json();
  return data.data.children;
}
