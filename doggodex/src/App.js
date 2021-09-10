

// Imported Components
import Dog from "./components/Dog/Dog";
import List from "./components/List/List";

function App() {
  
  // test data
  const data = {
    name: "dogdogdog",
    image: "https://i.imgur.com/Psvkw19m.jpg?1",
  };

  return (
    <main >
      <h1>DoggoDex</h1>
      <List />
      <Dog data={ data } />
    </main>
  );
};

export default App;
