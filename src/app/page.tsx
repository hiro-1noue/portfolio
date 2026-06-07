import Image from "next/image";
import Link from "next/link";
import Hero3D from "./components/Hero3D";

export default function Home() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <Hero3D />

      <div className="relative z-10">
        <h1>Hiro Portfolio</h1>
      </div>
    </section>
  );
}
