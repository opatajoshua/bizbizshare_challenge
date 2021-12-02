import { useState } from 'react';
import './App.css';
import Tabs, { Tab } from './components/Tabs';
import Section1 from './containers/Section1';
import Section2 from './containers/Section2';
import Section3 from './containers/Section3';

function App() {
  const [names, setNames] = useState<string[]>([])
  const [favAnimals, setFavAnimals] = useState<string[]>([])

  return (
    <div id="app" className="fixed h-full w-full overflow-auto">
      <Tabs className="container max-w-4xl mx-auto lg:px-0 px-6 pb-28 mt-10">
        <Tab label="Forms">
          <Section1
            onNewName={(newName)=>setNames([...names, newName])}
            onNewAnimal={(newAnimal)=>setFavAnimals([...favAnimals, newAnimal])}
          />
        </Tab>
        <Tab label="Names">
          <Section2 names={names}/>
        </Tab>
        <Tab label="Favorite Animals">
          <Section3 favAnimals={favAnimals}/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
