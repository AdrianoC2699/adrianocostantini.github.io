import posts from "@/data/posts.json";

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function SubstackArticles({ publicationUrl }: { publicationUrl: string }) {
  if (posts.length === 0) {
    return (
      <p className="text-muted">
        Gli articoli non sono disponibili in questo momento.{" "}
        <a
          href={publicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-clay underline underline-offset-4"
        >
          Leggi direttamente su Substack
        </a>
        .
      </p>
    );
  }

  return (
    <ul className="divide-y divide-ink/15 border-y border-ink/15">
      {posts.map((post) => (
        <li key={post.link}>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-1 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <time className="text-sm text-muted">{formatDate(post.isoDate)}</time>
            <div>
              <h3 className="font-display text-xl leading-snug transition-colors group-hover:text-clay sm:text-2xl">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
