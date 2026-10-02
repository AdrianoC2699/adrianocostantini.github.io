import Parser from "rss-parser";
import { writeFileSync, existsSync } from "node:fs";

const FEED_URL = "https://adrianoc99.substack.com/feed";
const OUT = "src/data/posts.json";

try {
  const parser = new Parser({
    timeout: 15000,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36",
      Accept: "application/rss+xml, application/xml",
    },
  });
  const feed = await parser.parseURL(FEED_URL);
  const posts = feed.items.slice(0, 6).map((item) => {
    const text = (item.contentSnippet ?? "").replace(/\s+/g, " ").trim();
    return {
      title: item.title ?? "Senza titolo",
      link: item.link ?? "#",
      isoDate: item.isoDate ?? "",
      excerpt: text.length > 170 ? text.slice(0, 170).trimEnd() + "…" : text,
    };
  });
  if (posts.length === 0) throw new Error("feed vuoto");
  writeFileSync(OUT, JSON.stringify(posts, null, 2));
  console.log(`Feed aggiornato: ${posts.length} articoli`);
} catch (err) {
  console.warn("Feed non raggiungibile, uso la copia salvata:", err.message);
  if (!existsSync(OUT)) writeFileSync(OUT, "[]");
}
