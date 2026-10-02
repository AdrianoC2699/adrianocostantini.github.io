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
      <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
        <p className="mb-2">Gli articoli non sono disponibili in questo momento.</p>
        <a
          href={publicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-orange-600 hover:underline"
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
          className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md"
        >
          <time className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
            {formatDate(post.isoDate)}
          </time>
          <h3 className="mb-2 text-lg font-semibold leading-snug text-slate-900 group-hover:text-orange-600">
            {post.title}
          </h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
          <span className="text-sm font-semibold text-orange-600">
            Leggi l&apos;articolo{" "}
            <span className="inline-block transition group-hover:translate-x-1">→</span>
          </span>
        </a>
      ))}
    </div>
  );
}
