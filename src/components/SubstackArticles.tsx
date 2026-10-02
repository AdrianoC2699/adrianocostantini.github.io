import Parser from "rss-parser";

type Post = { title: string; link: string; date: string; excerpt: string };

async function getPosts(feedUrl: string): Promise<Post[]> {
  try {
    const parser = new Parser({ timeout: 15000 });
    const feed = await parser.parseURL(feedUrl);
    return feed.items.slice(0, 6).map((item) => {
      const text = (item.contentSnippet ?? "").replace(/\s+/g, " ").trim();
      return {
        title: item.title ?? "Senza titolo",
        link: item.link ?? "#",
        date: item.isoDate
          ? new Date(item.isoDate).toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "",
        excerpt: text.length > 170 ? text.slice(0, 170).trimEnd() + "…" : text,
      };
    });
  } catch (err) {
    console.error("Feed Substack non disponibile:", err);
    return [];
  }
}

export default async function SubstackArticles({
  feedUrl,
  publicationUrl,
}: {
  feedUrl: string;
  publicationUrl: string;
}) {
  const posts = await getPosts(feedUrl);

  if (posts.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
        <p className="mb-2">Gli articoli non sono disponibili in questo momento.</p>
        <a
          href={publicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-emerald-700 hover:underline"
        >
          Leggi direttamente su Substack →
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {posts.map((post) => (
        <a
          key={post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
        >
          <time className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
            {post.date}
          </time>
          <h3 className="mb-2 text-lg font-semibold leading-snug text-slate-900 group-hover:text-emerald-700">
            {post.title}
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
          <span className="text-sm font-semibold text-emerald-700">
            Leggi l&apos;articolo <span className="inline-block transition group-hover:translate-x-1">→</span>
          </span>
        </a>
      ))}
    </div>
  );
}
