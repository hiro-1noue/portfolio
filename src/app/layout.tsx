import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This website is portfolio of hiro-1noue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
    >
      <body className="min-h-screen flex flex-col">
      	<Header title="portfolio" />
      	
	<main className="flex-1">
      	    {children}
	</main>

	<Footer title="portfolio"/>
      </body>
    </html>
  );
}
