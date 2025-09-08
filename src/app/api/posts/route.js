// get endpoint to use on client
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const subreddit = searchParams.get("subreddit" || "popular");

  const res = await fetch(
    `https://www.reddit.com/r/${subreddit}.json?raw_json=1`
  );
  const data = await res.json();
  return new Response(JSON.stringify(data.data.children), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
