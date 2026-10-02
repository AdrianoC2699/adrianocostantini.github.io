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
    title: "Rigenerazione urbana e consumo di suolo: prospettive e politiche",
    description: "Un'analisi critica sulle politiche di tutela del territorio, dinamiche abitative europee e sfide di sostenibilità urbana.",
    date: "Settembre 2026",
    url: "https://substack.com",
    category: "Public Affairs",
    readTime: "6 min",
  },
  {
    title: "ESG Governance e rendicontazione di sostenibilità",
    description: "Approfondimento sugli standard ESG e la compliance per le pubbliche amministrazioni e le imprese virtuose.",
    date: "Settembre 2026",
    url: "https://substack.com",
    category: "ESG & Sostenibilità",
    readTime: "8 min",
  },
];
