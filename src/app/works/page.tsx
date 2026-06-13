import Image from "next/image";
import Link from "next/link";
import WorkCard from "../components/WorkCard";

export default function Works() {
  return (
    <section className="max-w-5xl mx-auto">
      <h1 className="text-3xl pb-2 mb-4 border-b">Works</h1>
      <p>There are my works made since 2024</p>
      <div className="grid md:grid-cols-2">
      </div>
    </section>
  );
}
