type HeaderProbs = {
  title: string;
};

export default function Header({ title }: HeaderProbs) {
  return (
    <header
      className="fixed top-0 z-50 w-full h-14 p-3"   
    >
      <div className="flex w-full h-full justify-between items-center">
        <div className="text-white">
          <a href="#">portfolio</a>
        </div>

        <div className="flex justify-between items-center w-auto max-w-100 h-auto bg-white backdrop-blur px-5 py-2 gap-4 rounded">
	  <div className="">Home</div>
	  <div>Work</div>
	  <div>Profile</div>
        </div>

	<div className="text-white">
	  <div>Contact</div>
	</div>
      </div>
    </header>
  );
}
