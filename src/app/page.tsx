import SubstackArticles from "@/components/SubstackArticles";

const PUBLICATION_URL = "https://adrianoc99.substack.com";
const BASE_PATH = "/adrianocostantini.github.io";
const EMAIL = "adrianocostantini99@outlook.it";

const topics = [
  { label: "ESG & Sostenibilità", style: "bg-emerald-100 text-emerald-800" },
  { label: "Fiscalità ambientale", style: "bg-orange-100 text-orange-800" },
  { label: "Public affairs", style: "bg-violet-100 text-violet-800" },
  { label: "Politiche industriali", style: "bg-sky-100 text-sky-800" },
];

const links = [
  { label: "Substack", href: "https://substack.com/@adrianoc99", style: "bg-orange-500 text-white hover:bg-orange-600" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adriano-costantini-039781bb/", style: "bg-slate-900 text-white hover:bg-slate-700" },
  { label: "GitHub", href: "https://github.com/AdrianoC2699", style: "bg-white text-slate-800 ring-1 ring-slate-300 hover:ring-slate-500" },
];

const skills = [
  {
    title: "ESG & Corporate Sustainability",
    text: "Criteri ESG, reporting di sostenibilità (GRI, CSRD) e analisi di materialità.",
    style: "bg-emerald-50 border-emerald-200",
    accent: "text-emerald-800",
  },
  {
    title: "Compliance & fiscalità ambientale",
    text: "Tassazione verde (CBAM, incentivi Transizione 5.0), valutazione d'impatto normativo e conformità ambientale.",
    style: "bg-orange-50 border-orange-200",
    accent: "text-orange-800",
  },
  {
    title: "Public affairs & stakeholder",
    text: "Relazioni tra pubblico e privato, gestione di progetti complessi, monitoraggio dei fondi PNRR e UE.",
    style: "bg-violet-50 border-violet-200",
    accent: "text-violet-800",
  },
];

const path = [
  {
    title: "Laurea magistrale in Amministrazione, Innovazione e Sostenibilità Ambientale (LM-63)",
    place: "Sapienza Università di Roma",
    note: "In corso, laureando",
  },
  {
    title: "Tirocinio su filiere industriali e politiche per il Made in Italy",
    place: "Ministero delle Imprese e del Made in Italy (MIMIT)",
    note: "In corso, fino a dicembre 2026",
  },
  {
    title: "Certificazioni Open Badge in ESG, economia circolare e reporting di sostenibilità",
    place: "Università Federico II di Napoli",
    note: "",
  },
  {
    title: "Laurea triennale in Scienze dell'Amministrazione e dell'Organizzazione (L-16)",
    place: "Sapienza Università di Roma",
    note: "",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf7f2] text-slate-900">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-300/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-emerald-200/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-200/60 blur-3xl" />

      <main className="relative mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* biglietto da visita */}
        <section className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-xl shadow-orange-900/5 backdrop-blur sm:p-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_PATH}/foto.jpg`}
            alt="Adriano Costantini"
            className="mb-8 h-24 w-24 rounded-2xl object-cover ring-4 ring-orange-200"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Adriano Costantini</h1>
          <p className="mt-3 text-lg text-slate-600">
            Laureando magistrale in Amministrazione, Innovazione e Sostenibilità Ambientale,
            Sapienza Università di Roma.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {topics.map((t) => (
              <span key={t.label} className={`rounded-full px-3 py-1 text-xs font-semibold ${t.style}`}>
                {t.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${l.style}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>

        {/* chi sono */}
        <section className="mt-16">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">Chi sono</h2>
          <div className="space-y-4 leading-relaxed text-slate-700">
            <p>
              Mi sto laureando in Amministrazione, Innovazione e Sostenibilità Ambientale alla
              Sapienza, dopo la triennale in Scienze dell&apos;Amministrazione e dell&apos;Organizzazione.
              Mi interessa il punto in cui la transizione ecologica diventa concreta per imprese e
              amministrazioni: reporting ESG, fiscalità ambientale, fondi PNRR e UE.
            </p>
            <p>
              Sono tirocinante al MIMIT, dove analizzo filiere industriali e politiche per il
              Made in Italy, e porto con me una vena tecnica nata da progetti di robotica,
              domotica e analisi dati.
            </p>
            <p>
              Su Substack scrivo{" "}
              <a
                href={PUBLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange-600 hover:underline"
              >
                L&apos;Analisi di Adriano
              </a>
              , dove provo a spiegare cosa c&apos;è dietro leggi e agende ambientali.
            </p>
          </div>
        </section>

        {/* competenze */}
        <section className="mt-16">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">Competenze</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title} className={`rounded-2xl border p-5 ${s.style}`}>
                <h3 className={`mb-2 text-sm font-bold ${s.accent}`}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* percorso */}
        <section className="mt-16">
          <h2 className="mb-5 text-2xl font-bold tracking-tight">Percorso</h2>
          <ol className="space-y-5 border-l-2 border-orange-200 pl-6">
            {path.map((p) => (
              <li key={p.title} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-orange-400 ring-4 ring-[#faf7f2]" />
                <h3 className="font-semibold leading-snug">{p.title}</h3>
                <p className="text-sm text-slate-500">{p.place}</p>
                {p.note && <p className="mt-1 text-sm text-slate-600">{p.note}</p>}
              </li>
            ))}
          </ol>
        </section>

        {/* articoli */}
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Ultime analisi</h2>
            <a
              href={PUBLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-orange-600 hover:underline"
            >
              Tutti gli articoli →
            </a>
          </div>
          <SubstackArticles publicationUrl={PUBLICATION_URL} />
        </section>

        {/* disponibilità */}
        <section className="mt-16 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
          <h2 className="text-xl font-bold">Aperto a collaborazioni</h2>
          <p className="mt-2 max-w-xl text-slate-300">
            Mi interessano opportunità in consulenza ESG, corporate sustainability, business
            analysis e politiche industriali.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Scrivimi via email
            </a>
            <a
              href="https://www.linkedin.com/in/adriano-costantini-039781bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-slate-600 transition hover:ring-slate-400"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">{EMAIL}</p>
        </section>

        <footer className="mt-12 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Adriano Costantini
        </footer>
      </main>
    </div>
  );
}
