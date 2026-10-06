import type { ReactNode } from "react";
import SubstackArticles from "@/components/SubstackArticles";
import Leaves from "@/components/Leaves";
import OrbitRing from "@/components/OrbitRing";
import Sprout from "@/components/Sprout";

const PUBLICATION_URL = "https://adrianoc99.substack.com";
const BASE_PATH = "/adrianocostantini.github.io";
const EMAIL = "adrianocostantini99@outlook.it";
const LINKEDIN = "https://www.linkedin.com/in/adriano-costantini-039781bb/";
const SUBSTACK_PROFILE = "https://substack.com/@adrianoc99";
const GITHUB = "https://github.com/AdrianoC2699";

const topics = [
  { label: "ESG e sostenibilità", dot: "bg-sage" },
  { label: "Fiscalità ambientale", dot: "bg-clay" },
  { label: "Public affairs", dot: "bg-lilac" },
  { label: "Politiche industriali", dot: "bg-sun" },
];

const skills = [
  {
    title: "ESG & Corporate Sustainability",
    text: "Criteri ESG, reporting di sostenibilità (GRI, CSRD) e analisi di materialità.",
    bar: "bg-sage",
  },
  {
    title: "Compliance & fiscalità ambientale",
    text: "Tassazione verde (CBAM, incentivi Transizione 5.0), valutazione d'impatto normativo e conformità ambientale.",
    bar: "bg-clay",
  },
  {
    title: "Public affairs & stakeholder",
    text: "Relazioni tra pubblico e privato, gestione di progetti complessi, monitoraggio dei fondi PNRR e UE.",
    bar: "bg-lilac",
  },
];

const path = [
  {
    when: "In corso",
    title: "Laurea magistrale in Amministrazione, Innovazione e Sostenibilità Ambientale (LM-63)",
    place: "Sapienza Università di Roma",
  },
  {
    when: "Fino a dicembre 2026",
    title: "Tirocinio su filiere industriali e politiche per il Made in Italy",
    place: "Ministero delle Imprese e del Made in Italy (MIMIT)",
  },
  {
    when: "Certificazioni",
    title: "Open Badge in ESG, economia circolare e reporting di sostenibilità",
    place: "Università Federico II di Napoli",
  },
  {
    when: "Triennale",
    title: "Laurea in Scienze dell'Amministrazione e dell'Organizzazione (L-16)",
    place: "Sapienza Università di Roma",
  },
];

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-ink/15">
      <div className="reveal mx-auto grid max-w-5xl gap-6 px-6 py-14 md:grid-cols-[11rem_1fr] md:gap-10">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-clay">
            <Sprout />
            {label}
          </p>
          <h2 className="font-display mt-1 text-2xl">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <Leaves />
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm">
          <span className="font-display text-lg">Adriano Costantini</span>
          <div className="flex gap-6 font-medium text-muted">
            <a href="#chi-sono" className="hover:text-clay">Chi sono</a>
            <a href="#percorso" className="hover:text-clay">Percorso</a>
            <a href="#scritti" className="hover:text-clay">Scritti</a>
            <a href="#contatti" className="hover:text-clay">Contatti</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        {/* hero */}
        <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-[1.4fr_1fr] md:pt-16">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-clay">
              Politiche pubbliche · Sostenibilità · Innovazione
            </p>
            <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl">
              Adriano Costantini
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-ink/80">
              Laureando magistrale in Amministrazione, Innovazione e Sostenibilità Ambientale,
              Sapienza Università di Roma.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              {topics.map((t, i) => (
                <li key={t.label} className="flex items-center gap-2">
                  <span className={`pulse-dot h-2.5 w-2.5 rounded-full ${t.dot}`} style={{ animationDelay: `${i * 0.6}s` }} />
                  {t.label}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full bg-clay px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink"
              >
                Scrivimi
              </a>
              <a
                href="#scritti"
                className="rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-ink/40 transition hover:ring-ink"
              >
                Leggi gli articoli
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-64 md:w-full md:max-w-xs">
            <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-sage" />
            <OrbitRing />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE_PATH}/foto.jpg`}
              alt="Adriano Costantini"
              className="relative aspect-square w-full rounded-3xl object-cover"
            />
          </div>
        </section>

        <Section id="chi-sono" label="01" title="Chi sono">
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-ink/85">
            <p>
              Mi sto laureando in Amministrazione, Innovazione e Sostenibilità Ambientale alla
              Sapienza, dopo la triennale in Scienze dell&apos;Amministrazione e
              dell&apos;Organizzazione. Mi interessa il punto in cui la transizione ecologica
              diventa concreta per imprese e amministrazioni: reporting ESG, fiscalità
              ambientale, fondi PNRR e UE.
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
                className="font-semibold text-clay underline underline-offset-4"
              >
                L&apos;Analisi di Adriano
              </a>
              , dove provo a spiegare cosa c&apos;è dietro leggi e agende ambientali.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title}>
                <div className={`mb-4 h-1 w-10 rounded-full ${s.bar}`} />
                <h3 className="font-semibold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="percorso" label="02" title="Percorso">
          <ol className="divide-y divide-ink/15 border-y border-ink/15">
            {path.map((p) => (
              <li key={p.title} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <p className="text-sm font-medium text-clay">{p.when}</p>
                <div>
                  <h3 className="font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="scritti" label="03" title="Scritti">
          <SubstackArticles publicationUrl={PUBLICATION_URL} />
          <a
            href={PUBLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-semibold text-clay underline underline-offset-4"
          >
            Tutti gli articoli su Substack →
          </a>
        </Section>
      </main>

      <footer id="contatti" className="relative z-10 bg-ink text-paper">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-display text-3xl sm:text-4xl">Aperto a collaborazioni</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper/80">
            Mi interessano opportunità in consulenza ESG, corporate sustainability, business
            analysis e politiche industriali.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full bg-sun px-6 py-3 text-sm font-semibold text-ink transition hover:bg-paper"
            >
              Scrivimi via email
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-paper/40 transition hover:ring-paper"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-5 text-sm text-paper/70">{EMAIL}</p>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-paper/20 pt-6 text-xs text-paper/70">
            <span>© {new Date().getFullYear()} Adriano Costantini</span>
            <div className="flex gap-5">
              <a href={SUBSTACK_PROFILE} target="_blank" rel="noopener noreferrer" className="hover:text-paper">Substack</a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-paper">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
