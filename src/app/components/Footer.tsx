type FooterProbs = {
  title: string;
};

export default function Footer({ title }: FooterProbs) {
  return (
    <footer>
      <h1>{title}</h1>
    </footer>
  );
}
