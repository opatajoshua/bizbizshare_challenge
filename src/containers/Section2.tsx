/** Section2 container */
function Section2({ names }: { names: string[] }) {

  return (
    <div className="container max-w-4xl mx-auto lg:px-0 px-6 pb-28">
      <ul>
        {names.map((n, index) => (
        <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default Section2;