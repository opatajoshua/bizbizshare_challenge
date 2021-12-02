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
      <Tabs >
        <Tab label="Tab 1">
          <Section1
            onNewName={(newName)=>setNames([...names, newName])}
            onNewAnimal={(newAnimal)=>setFavAnimals([...favAnimals, newAnimal])}
          />
        </Tab>
        <Tab label="Tab 2">
          <Section2 names={names}/>
        </Tab>
        <Tab label="Tab 3">
          <Section3 favAnimals={favAnimals}/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
