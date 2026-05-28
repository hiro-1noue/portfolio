type HeaderProbs = {
  title: string;
};

export default function Header({ title }: HeaderProbs) {
  return (
    <header
      className="flex h-12 items-center justify-between bg-white gap-8"
    >
      <h1>{title}</h1>
    </header>
  );
}
