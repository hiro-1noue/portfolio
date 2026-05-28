type HeaderProbs = {
  title: string;
};

export default function Header({ title }: HeaderProbs) {
  return (
    <header
      className="fixed top-0 z-50 w-full h-14 m-3"   
    >
      <div className="w-auto max-w-50 bg-white backddrop-blur px-5 py-2">
        <h1>{title}</h1>
      </div>
    </header>
  );
}
