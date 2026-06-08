type WorkCardProps = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function WorkCard({
  title,
  description,
  tags,
  href,
}: WorkCardProps) {
  const content = (
    <article className="h-full border rounded-md p-6 transition hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="leading-8 opacity-80 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
	  <span
	    key={tag}
	    className="px-2 py-1 text-sm border rounded"
	  >
	    {tag}
	  </span>
	))}
      </div>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} className="block">
      {content}
    </a>
  );
}
