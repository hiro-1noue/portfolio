export type Work = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const works: Work[] = [
  {
    title: "Typers",
    description: "Typing system for trackball written in Rust.",
    tags: ["Rust"],
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website.",
    tags: ["Next.js", "TailwindCSS"],
  },
];
