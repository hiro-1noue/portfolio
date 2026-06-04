import Link from "next/link";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header
      className="fixed top-0 z-50 w-full h-14 p-3"   
    >
      <div className="flex w-full h-full justify-between items-center">
        <div className="text-white">
          <Link href="/">portfolio</Link>
        </div>

	<div className="flex justify-between items-center gap-4">

          <nav className="flex justify-between items-center w-auto max-w-100 h-auto px-5 py-2 gap-4 rounded">
	    <Link href="/" className="">Home</Link>
	    <Link href="/works">Works</Link>
	    <Link href="/profile">Profile</Link>
          </nav>

	  <div className="text-white">
	    <div>Contact</div>
	  </div>

	</div>

      </div>
    </header>
  );
}
