/** Section3 container */
function Section3({ favAnimals }: { favAnimals: string[] }) {

  return (
    <div className="">
      <ul className="name-list mt-8 divide-y">
        {favAnimals.map((n, index) => (
        <li key={index} className="flex items-center py-3">
          <div className="font-bold text-xl rounded-full bg-blue-50 text-blue-800 w-8 h-8 flex items-center justify-center mr-3">{index+1}</div> 
          <span className="font-medium text-md text-gray-700">{n}</span>
        </li>
        ))}
      </ul>
      {!favAnimals.length &&  <p className="text-center font-bold text-gray-500 py-20">No favorite animals added</p>}
    </div>
  );
}

export default Section3;