export type TimelineWork = {
  title: string;
  href?: string;
};

export type TimelineItem = {
  year: number;
  label: string;
  works?: TimelineWork[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "C++", "Rust"],
  },
  {
    category: "Framework",
    items: ["Next.js"],
  },
  {
    category: "Security",
    items: ["OffSec Web", "OffSec Cloud"],
  },
];

export const timeline: TimelineItem[] = [
  {
    year: 2023,
    label: "プログラミング開始",
  },
  {
    year: 2024,
    label: "Web 開発・セキュリティ学習開始",
    works: [
      { title: "Typers", href: "https://github.com/hiro-1noue/typers" },
      { title: "Portfolio", href: "/" },
    ],
  },
];
