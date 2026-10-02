import SubstackArticles from "@/components/SubstackArticles";

// Cambia questi due valori se il tuo Substack ha un altro sottodominio
const PUBLICATION_URL = "https://adrianoc99.substack.com";
const FEED_URL = `${PUBLICATION_URL}/feed`;

const focusAreas = [
  { title: "Sostenibilità", text: "Politiche e strumenti per la transizione ecologica e la tutela del territorio." },
  { title: "Governance ESG", text: "Standard, rendicontazione e compliance per pubbliche amministrazioni e imprese." },
  { title: "Innovazione", text: "Strumenti digitali e nuovi modelli per l'amministrazione pubblica." },
];

const links = [
  { label: "Substack", href: "https://substack.com/@adrianoc99" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adriano-costantini-039781bb/" },
  { label: "GitHub", href: "https://github.com/AdrianoC2699" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-sm">
          <span className="font-semibold tracking-tight">Adriano Costantini</span>
          <div className="flex gap-6 text-slate-600">
            <a href="#aree" className="hover:text-emerald-700">Aree</a>
            <a href="#articoli" className="hover:text-emerald-700">Articoli</a>
            <a href="#contatti" className="hover:text-emerald-700">Contatti</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Politiche pubbliche · ESG · Innovazione
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Adriano Costantini
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Studente magistrale in Scienze delle Amministrazioni e delle Politiche Pubbliche
            alla Sapienza. Mi occupo di sostenibilità, governance ESG e innovazione nel settore pubblico.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#articoli"
              className="rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Leggi gli articoli
            </a>
            <a
              href="#contatti"
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Contattami
            </a>
          </div>
        </section>

        <section id="aree" className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Aree di interesse</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {focusAreas.map((a) => (
                <div key={a.title} className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="mb-2 font-semibold text-emerald-800">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="articoli" className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Articoli e analisi</h2>
            <a
              href={PUBLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-emerald-700 hover:underline"
            >
              Tutti gli articoli →
            </a>
          </div>
          <SubstackArticles feedUrl={FEED_URL} publicationUrl={PUBLICATION_URL} />
        </section>
      </main>

      <footer id="contatti" className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-semibold">Parliamone</h2>
            <p className="text-sm text-slate-500">Trovami sulle piattaforme qui accanto.</p>
          </div>
          <div className="flex gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <p className="border-t border-slate-200 py-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Adriano Costantini
        </p>
      </footer>
    </div>
  );
}
