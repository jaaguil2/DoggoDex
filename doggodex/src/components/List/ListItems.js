

import { useEffect, useState } from 'react'
import styled from 'styled-components'

// Imported Components
import Item from "./Item"

// Style
const Search = styled.div`
  display: flex;
  justify-content: center;
  border: solid black;
  border-radius: 3px;
  padding: .5rem;
`
const Button = styled.button`
  color: white;
  background-color: grey;
`

const Input = styled.input`
  color: black;
  background-color: #79EA42;
`

const ListDiv = styled.div`
  margin: 1rem;
  padding: 1rem;
  height: 500px;
  overflow: scroll;
  border: solid black;
  border-radius: 3px;
  background-color: black;
`

// Component to list each element
function ListItems({ dogList, setDog, seenDogs, setSeenDogs }) {

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
      <Search>
        <Input type="text" value={search} onChange={handleChange} />
        <Button onClick={clear}>CLEAR</Button>
      </Search>
      <ListDiv>
        {sendList.map((element, idx) => (
          <Item key={idx} name={element} setDog={setDog} seenDogs={seenDogs} setSeenDogs={setSeenDogs} />))}
      </ListDiv>
    </div>
  )
}

export default ListItems
