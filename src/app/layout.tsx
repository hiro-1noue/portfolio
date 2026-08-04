import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import TransitionProvider from "./components/TransitionProvider"
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This website is portfolio of hiro-1noue",
};

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={spaceGrotesk.variable}
    >
      <body className="min-h-screen flex flex-col">
        <TransitionProvider>
          <Header title="Hiro" />


          <main className="flex-1 pt-14">
            {children}
          </main>

          <Footer title="Hiro" />
        </TransitionProvider>
      </body>
    </html>
  );
}
