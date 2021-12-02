import { useState } from "react";

interface Section1Props{
  onNewName: (name:string) => void,
  onNewAnimal: (animal:string) => void
}

/** Section1 container */
function Section1({onNewName, onNewAnimal}: Section1Props) {
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
    <div className="container max-w-4xl mx-auto lg:px-0 px-6 pb-28">
      {/* form 1 */}
      <form onSubmit={submitName}>
        <input required type="text" value={name} onInput={(e)=>setName((e.target as any).value)}/>
        <button type="submit">Submit</button>
      </form>

      {/* form 2 */}
      <form onSubmit={submitFavAnimal}>
        <input required type="text" value={favAnimal}  onInput={(e)=>setFavAnimal((e.target as any).value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Section1;
