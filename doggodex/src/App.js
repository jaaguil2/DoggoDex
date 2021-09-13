

import { useState } from 'react'

// Imported Components
import Dog from "./components/Dog/Dog";
import List from "./components/List/List";
import Helper from "./components/Helper";

function App() {

  const [dog, setDog] = useState('')  

  return (
    <main >
      <h1>DoggoDex</h1>
      <List setDog={setDog} />
      <Dog dog={ dog } />
      <Helper />
    </main>
  );
};

export default App;
