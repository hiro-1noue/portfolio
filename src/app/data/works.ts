export type Work = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

export const works: Work[] = [
  {
    title: "香川の水不足から世界を考える",
    description: "The website I made with team member when I was 14 yo",
    tags: ["HTML", "CSS", "JS"],
    href: "https://contest.japias.jp/tqj27/270007H/",
    featured: true,
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website.",
    tags: ["Next.js", "TailwindCSS"],
    href: "/",
    featured: true,
  },
  {
    title: "Typers",
    description: "Typing system for trackball written in Rust.",
    tags: ["Rust"],
    href: "https://github.com/hiro-1noue/typers",
    featured: false,
  },
];
