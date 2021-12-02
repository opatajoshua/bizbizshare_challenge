import { useState } from "react";

interface Section1Props {
  onNewName: (name: string) => void,
  onNewAnimal: (animal: string) => void
}

/** Section1 container */
function Section1({ onNewName, onNewAnimal }: Section1Props) {
  const [name, setName] = useState<string>('');
  const [favAnimal, setFavAnimal] = useState<string>('');

  function submitName(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    onNewName(name);
    setName('');
  }

  function submitFavAnimal(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    onNewAnimal(favAnimal);
    setFavAnimal('');
  }

  return (
    <div className="">
      {/* form 1 */}
      <form onSubmit={submitName} className="flex flex-col  py-10">
        <label htmlFor="nameInput" className="w-full">Name</label>
        <div className="flex flex-wrap">
          <input id="nameInput" placeholder="Enter name" required type="text" value={name} onInput={(e) => setName((e.target as any).value)}
              className="bg-gray-100 rounded-md h-12 px-3 flex-1 max-w-md  mr-0 md:mr-4" />
          <button type="submit" className="h-12 bg-blue-600 text-white font-bold rounded-md px-10 hover:bg-opacity-90 w-full md:w-auto mt-4 md:mt-0">Submit</button>
        </div>
      </form>

      {/* form 2 */}
      <form onSubmit={submitFavAnimal} className="flex flex-col  py-10">
        <label htmlFor="favAnimalInput" className="w-full">Favorite animal</label>
        <div className="flex flex-wrap">
          <input id="favAnimalInput" placeholder="Enter your favorite animal" required type="text" value={favAnimal} onInput={(e) => setFavAnimal((e.target as any).value)}
          className="bg-gray-100 rounded-md h-12 px-3 flex-1 max-w-md  mr-0 md:mr-4" />
          <button type="submit" className="h-12 bg-blue-600 text-white font-bold rounded-md px-10 hover:bg-opacity-90 w-full md:w-auto mt-4 md:mt-0">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Section1;
