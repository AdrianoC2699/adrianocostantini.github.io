import { articles } from '@/data/articles';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto space-y-16">
        
        {/* Header / Intro */}
        <section className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200/80">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide uppercase rounded-full mb-4">
              Portfolio & Pubblicazioni
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Adriano Costantini
            </h1>
            <p className="text-lg text-slate-600 font-normal leading-relaxed mb-6">
              Master's Student in Scienze delle Amministrazioni e delle Politiche Pubbliche (Sapienza) con focus su Sostenibilità, Governance ESG e Innovazione.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://substack.com/@adrianoc99" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm rounded-lg transition"
              >
                Substack
              </a>
              <a 
                href="https://www.linkedin.com/in/adriano-costantini-039781bb/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg transition"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/AdrianoC2699" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-medium text-sm border border-slate-300 rounded-lg transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Articoli Substack */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Articoli & Analisi
            </h2>
            <span className="text-sm text-slate-500 font-medium">
              Pubblicati su Substack
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {articles.map((article, index) => (
              <article 
                key={index} 
                className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-medium text-slate-400 mb-3">
                    <span className="text-emerald-600 font-semibold uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-md">
                      {article.category}
                    </span>
                    <span>{article.date} · {article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition mb-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {article.description}
                  </p>
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition"
                >
                  Leggi articolo <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-400 pt-8 border-t border-slate-200">
          © {new Date().getFullYear()} Adriano Costantini — Sviluppato con Next.js & GitHub Pages
        </footer>

      </main>
    </div>
  );
}
