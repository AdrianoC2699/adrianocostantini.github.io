export interface Article {
  title: string;
  description: string;
  date: string;
  url: string;
  category: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    title: "Titolo del tuo primo articolo su Substack",
    description: "Breve abstract dell'articolo (es. sostenibilità, politiche pubbliche, governance ESG).",
    date: "Settembre 2026",
    url: "https://tuonome.substack.com/p/articolo-1",
    category: "Public Affairs",
    readTime: "5 min",
  },
  {
    title: "Titolo del secondo articolo",
    description: "Analisi di dettaglio sulle direttive europee o politiche territoriali.",
    date: "Agosto 2026",
    url: "https://tuonome.substack.com/p/articolo-2",
    category: "ESG & Sostenibilità",
    readTime: "8 min",
  },
];

