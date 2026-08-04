import { contact } from "../data/contact";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto my-16 px-4">
      <h1 className="text-3xl pb-2 mb-10 border-b">Contact</h1>

      <div className="space-y-8">
        <div>
          <p className="text-sm opacity-50 mb-2">Email</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-lg hover:opacity-60 transition-opacity"
          >
            {contact.email}
          </a>
        </div>

        <div>
          <p className="text-sm opacity-50 mb-2">SNS</p>
          <div className="flex flex-col gap-2">
            {contact.sns.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
