/* call initial posts */
export async function getInitialPosts(subreddit = "popular") {
  const res = await fetch(
    `https://www.reddit.com/r/${subreddit}.json?raw_json=1`
  );
  const data = await res.json();

  const posts = data.data.children.map((p) => ({
    id: p.data.id,
    title: p.data.title,
    author: p.data.author,
    subreddit: p.data.subreddit,
    selftext: p.data.selftext,
    preview: p.data.preview,
    media: p.data.media,
    is_video: p.data.is_video,
  }));

  console.log(posts);
  return posts;
}
