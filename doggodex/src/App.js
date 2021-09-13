import { useState } from 'react'

// Imported Components
import Dog from "./components/Dog/Dog";
import List from "./components/List/List";
import Helper from "./components/Helper";

function App() {

  const [dog, setDog] = useState('')
  
  // test data
  const dataArr = [
    {
      name: "dog",
      image: "https://i.imgur.com/Psvkw19m.jpg?1",
    },
    {
      name: "dogdog",
      image: "https://i.imgur.com/Psvkw19m.jpg?1",
    },
    {
      name: "dogdogdog",
      image: "https://i.imgur.com/Psvkw19m.jpg?1",
    }
  ]

  

  return (
    <main >
      <h1>DoggoDex</h1>
      <List setDog={setDog} />
      <Dog data={ dataArr[0] } />
      <Helper />
    </main>
  );
};

export default App;
