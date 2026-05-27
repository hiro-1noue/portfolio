import "./components/Footer.tsx"
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
      lang="en"
    >
      <body className="min-h-full flex flex-col">
      	<Header />
      	
	<main>
      	    {children}
	</main>

	<Footer title="portfolio"/>
      </body>
    </html>
  );
}
