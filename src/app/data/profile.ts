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
    year: 2010,
    label: "生まれる",
  },
  {
    year: 2023,
    label: "プログラミング開始",
  },
  {
    year: 2024,
    label: "全国中学高校Webコンテスト プラチナ賞",
    works: [
      { title: "香川の水不足から世界を考える", href: "https://contest.japias.jp/tqj27/270007H/" },
    ],
  },
  {
    year: 2026,
    label: "セキュリティ・キャンプ2026全国大会 Z2ゼミ",
  },
];
