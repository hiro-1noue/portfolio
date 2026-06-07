import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";

type FooterProps = {
  title: string;
};

export default function Footer({ title }: FooterProps) {
  return (
    <footer className="w-full h-52 rounded-t-md bg-surface text-on-surface p-12 font-space">
      <div className="w-full h-full flex justify-center items-center gap-16">
        <h1 className="text-4xl">{ title }</h1>

	<div className="w-px h-full bg-mauve-500"></div>

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
        <Link href="https://github.com/hiro-1noue" target="_blank">
	  <FaGithub size={22} />
	</Link>
	<Link href="https://x.com/hiro_1noue" target="_blank">
	  <FaXTwitter size={22} />
	</Link>
	<Link href="https://qiita.com/hiro-1noue" target="_blank">
	  <SiQiita size={22} />
	</Link>
      </div>
    </footer>
  );
}
