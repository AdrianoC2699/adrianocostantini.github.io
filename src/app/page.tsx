import { articles } from '@/data/articles';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 font-sans">
      {/* Header / Intro */}
      <section className="mb-16 border-b pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
          Il Tuo Nome
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Politiche Pubbliche & Sostenibilità | Autore su Substack
        </p>
        <div className="flex gap-4 text-sm font-medium text-blue-600">
          <a href="https://tuonome.substack.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Substack</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/tuo-username" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </div>
      </section>

      {/* Sezione Substack */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Articoli & Pubblicazioni
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <article key={index} className="border rounded-lg p-6 hover:shadow-md transition bg-white flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                  <span className="font-semibold text-blue-600 uppercase tracking-wider">{article.category}</span>
                  <span>{article.date} · {article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Leggi su Substack →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
