

import Item from "./Item"

// Component to list each element
function ListItems({ dogList, setDog }) {return (
    <div>      
      {dogList.map((element, idx) => (
          <Item key={idx} name={element} setDog={setDog} />
      ))}
    </div>
  )
}

export default ListItems
