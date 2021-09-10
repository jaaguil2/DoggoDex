

// Imported Components
import Dog from "./components/Dog/Dog";
import List from "./components/List/List";

function App() {
  
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

  let data = dataArr[0]

  return (
    <main >
      <h1>DoggoDex</h1>
      <List dataArr={dataArr} />
      <Dog data={ data } />
    </main>
  );
};

export default App;
