import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

async function main() {
  const text = "Hello from GitHub Actions 🤖";
  await client.v2.tweet(text);
  console.log("Tweet posted");
}

main();