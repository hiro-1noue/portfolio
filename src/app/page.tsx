import Image from "next/image";
import Link from "next/link";
import Hero3D from "./components/Hero3D";

export default function Home() {
  return (
    <>
      <section id="hero" className="relative w-full h-screen overflow-hidden">
        <Hero3D />

        <div className="relative w-full h-full z-10">
          <h1 className="text-4xl absolute top-1/2 left-4">Hiro's Portfolio</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-16 px-4 border-t relative overflow-hidden">
        <h2 className="text-3xl my-6">About</h2>
	<div className="leading-8">
	  <p>
	    I'm active under the name Hiro on SNS.
	  </p>
	  <p>
	    I'm a student interested in web development, cybersecurity and competitive programming.
	  </p>
	</div>
      </section>

      <section className="max-w-5xl mx-auto my- px-4">
        <h2 className="text-3xl mb-8">Featured Works</h2>

	<div className="grid md:grid-cols-2 gap-6">
	   <WorkCard />
	   <WorkCard />
	</div>
      </section>
    </>
  );
}
