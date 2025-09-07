const API_BASE = 'https://www.reddit.com';

/* call initial posts */
export async function getInitialPosts(subreddit = "reactjs") {
  const res = await fetch(`${API_BASE}/r/${subreddit}.json`, {
    cache: "no-store", // show last posts ever
  });
  const data = await res.json();
  return data.data.children;
}
