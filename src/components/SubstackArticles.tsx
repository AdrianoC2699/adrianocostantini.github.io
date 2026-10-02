'use client';

import { useEffect, useState } from 'react';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

interface SubstackArticlesProps {
  rssUrl: string;
}

export default function SubstackArticles({ rssUrl }: SubstackArticlesProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.status === 'ok' && data.items) {
          // Pulizia descrizione rimuovendo eventuali tag HTML per mostrare un estratto pulito
          const formattedArticles = data.items.map((item: any) => {
            const cleanDescription = item.description
              ? item.description.replace(/<[^>]*>?/gm, '').slice(0, 160) + '...'
              : 'Leggi l\'articolo completo su Substack.';

            const formattedDate = new Date(item.pubDate).toLocaleDateString('it-IT', {
              month: 'long',
              year: 'numeric',
            });

            return {
              title: item.title,
              link: item.link,
              pubDate: formattedDate,
              description: cleanDescription,
            };
          });

          setArticles(formattedArticles);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, [rssUrl]);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 animate-pulse h-48">
            <div className="h-4 bg-slate-200 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-slate-200 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error || articles.length === 0) {
    return (
      <div className="bg-white rounded-xl p-6 border border-slate-200 text-center text-slate-500">
        <p>Nessun articolo recuperato al momento.</p>
        <a 
          href="https://substack.com/@adrianoc99" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-emerald-600 hover:underline text-sm font-semibold mt-2 inline-block"
        >
          Visita il profilo Substack per leggere tutti i pezzi →
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {articles.map((article, index) => (
        <article 
          key={index} 
          className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
        >
          <div>
            <div className="flex justify-between items-center text-xs font-medium text-slate-400 mb-3">
              <span className="text-emerald-600 font-semibold uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-md">
                Substack
              </span>
              <span>{article.pubDate}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition mb-2">
              {article.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {article.description}
            </p>
          </div>

          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition"
          >
            Leggi su Substack <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </article>
      ))}
    </div>
  );
}
