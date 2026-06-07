import Image from "next/image";
import Link from "next/link";
import Hero3D from "./components/Hero3D";

export default function Home() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <Hero3D />

      <div className="relative w-full h-full z-10">
        <h1 className="text-4xl absolute top-1/2 pl-4">Hiro's Portfolio</h1>
      </div>
    </section>
  );
}
