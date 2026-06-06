import Link from "next/link";

type FooterProbs = {
  title: string;
};

export default function Footer({ title }: FooterProbs) {
  return (
    <footer className="w-full h-52 rounded-t-md bg-black text-white p-12 font-space">
      <div className="w-full h-full flex justify-center items-center gap-16">
        <h1 className="text-4xl">{ title }</h1>

	<div className="w-px h-full bg-white"></div>

	<nav className="flex gap-8">
	  <Link href="/">Home</Link>
	  <div className="flex flex-col gap-1">
	    <Link href="/works">Works</Link>
	    <Link href="/profile">Profile</Link>
	    <Link href="/contact">Contact</Link>
	  </div>
	</nav>

      </div>

      <div className="flex justify-end items-center gap-4">
        <Link href="https://github.com/hiro-1noue">G</Link>
	<Link href="https://x.com/hiro_1noue">X</Link>
	<Link href="https://zenn.dev/hiro1noue">Z</Link>
      </div>
    </footer>
  );
}
