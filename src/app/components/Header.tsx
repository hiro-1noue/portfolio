import Link from "next/link";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header
      className="fixed top-0 z-50 w-full h-14 p-3 font-orbitron-display"   
    >
      <div className="flex w-full h-full px-4 justify-between items-center">
        <Link href="/" className="text-2xl">Hiro</Link>

        <nav className="flex justify-between items-center w-auto max-w-100 h-auto px-5 py-2 gap-4 rounded text-lg">
	  <Link href="/" className="">Home</Link>
	  <Link href="/works">Works</Link>
	  <Link href="/profile">Profile</Link>
	  <Link href="/contact" className="text-white bg-black px-5 py-4 rounded-b-sm">Contact</Link>
        </nav>

      </div>
    </header>
  );
}
