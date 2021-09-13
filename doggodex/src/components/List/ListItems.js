

import { useEffect, useState } from 'react'


// Imported Components
import Item from "./Item"

// Component to list each element
function ListItems({ dogList, setDog }) {    


  // States
  const [sendList, setSendList] = useState(null)
  const [dogSearch, setDogSearch] = useState([])
  const [search, setSearch] = useState('')

  // When text typed in search field, update list
  const handleChange = (e) => {
    setSearch(e.target.value)
    const newList = dogList.filter(text => text.includes(e.target.value))
    setDogSearch(newList)
  }

  // Determines which list gets sent
  useEffect(() => {
    if (search.length === 0) {
      setSendList(dogList)
    } else {
      setSendList(dogSearch)
    }
  }, [search, dogList, dogSearch])

  // When clear button pressed, clears search
  function clear() {
    setSearch('')
  }

  if (sendList === null) {return null}  
  return (
    <div>  
      <input type="text" value={search} onChange={handleChange} />
      <button onClick={clear}>clear</button>
      {sendList.map((element, idx) => (
          <Item key={idx} name={element} setDog={setDog} />))}
    </div>
  )
}

export default ListItems
