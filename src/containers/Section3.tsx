/** Section3 container */
function Section3({ favAnimals }: { favAnimals: string[] }) {

  return (
    <div className="container max-w-4xl mx-auto lg:px-0 px-6 pb-28">
      <ul>
        {favAnimals.map((n, index) => (
        <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default Section3;