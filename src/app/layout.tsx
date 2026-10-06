import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const SITE = "https://adrianoc2699.github.io/adrianocostantini.github.io/";
const TITLE = "Adriano Costantini | Politiche pubbliche, ESG e innovazione";
const DESCRIPTION =
  "Portfolio e articoli di Adriano Costantini: sostenibilità, governance ESG e innovazione nelle politiche pubbliche.";

export const metadata: Metadata = {
  metadataBase: new URL("https://adrianoc2699.github.io"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE,
    siteName: "Adriano Costantini",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: SITE + "foto.jpg", width: 400, height: 400, alt: "Adriano Costantini" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: [SITE + "foto.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
