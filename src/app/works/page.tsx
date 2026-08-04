import WorkCard from "../components/WorkCard";
import { works } from "../data/works";

export default function Works() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      <h1 className="text-3xl pb-2 mb-4 border-b">Works</h1>
      <p className="mb-8">There are my works made since 2024</p>
      <div className="grid md:grid-cols-2 gap-6">
        {works.map((work) => (
          <WorkCard
            key={work.title}
            title={work.title}
            description={work.description}
            tags={work.tags}
            href={work.href}
          />
        ))}
      </div>
    </section>
  );
}
