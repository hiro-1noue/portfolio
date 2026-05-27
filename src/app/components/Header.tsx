type HeaderProbs = {
  title: string;
};

export default function Header({ title }: HeaderProbs) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
