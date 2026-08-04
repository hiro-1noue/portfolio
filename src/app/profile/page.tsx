import { skills, timeline } from "../data/profile";
export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto my-16 px-4 space-y-16">

      {/* About */}
      <section>
        <h1 className="text-3xl pb-2 mb-6 border-b">Profile</h1>
        <div className="leading-8">
          <p>I'm active under the name Hiro on SNS.</p>
          <p>I'm a student interested in web development, cybersecurity and competitive programming.</p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl mb-6">Skills</h2>
        <div className="space-y-4">
          {skills.map((group) => (
            <div key={group.category} className="flex gap-4 items-start">
              <span className="text-sm opacity-50 w-24 shrink-0 pt-1">{group.category}</span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1 text-sm border rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl mb-6">Timeline</h2>
        <div className="relative pl-8">
          {/* 縦線 */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-foreground opacity-20" />

          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                {/* ドット */}
                <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-foreground" />

                <span className="text-sm opacity-50">{item.year}</span>
                <p className="mt-1">{item.label}</p>

                {item.works && item.works.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.works.map((work) => (
                      <a
                        key={work.title}
                        href={work.href}
                        className="px-2 py-1 text-sm border rounded opacity-70 hover:opacity-100 transition-opacity"
                      >
                        {work.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
