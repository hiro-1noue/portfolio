export type Work = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const works: Work[] = [
  {
    title: "Typers",
    description: "Typing system for trackball written in Rust.",
    tags: ["Rust"],
    href: "https://github.com/hiro-1noue/typers",
    featured: true,
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website.",
    tags: ["Next.js", "TailwindCSS"],
    href: "/",
    featured: true,
  },
];
