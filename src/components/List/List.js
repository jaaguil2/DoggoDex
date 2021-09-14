

import { useState, useEffect } from "react"
import styled from "styled-components"

// Imported Components
import ListItems from "./ListItems"
import Total from "./Total"

// Style
const TotalStyled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  font-family: 'VT323', monospace;
  display: flex;
  justify-content: center;
  border: black solid 3px;
  border-radius: 3px;
`

// Main component for list branch
function List({ setDog }) {

  // States
  const [dogList, setDogList] = useState([])
  const [seenDogs, setSeenDogs] = useState([])

  // Converts fetch obj to array
  const makeList = (dogObj) => {
    const newList = []
    for (let breed in dogObj) {
      if (dogObj[breed].length === 0) {
        newList.push(breed)
      } else {
        dogObj[breed].forEach(subBreed => {
          newList.push(`${subBreed} ${breed}`)
        })
      }
    }
    return newList
  }  

  // Fetch request
  useEffect(() => {
    const axios = require('axios').default
    let urlSend = 'https://dog.ceo/api/breeds/list/all'
    let dogObj

    axios.get(urlSend)
      .then(res => {
        dogObj = res.data.message
      })
      .catch(error => console.log(error))    
      .then(() => setDogList(makeList(dogObj)))      
  }, [])

  return (
    <div>      
      <ListItems dogList={dogList} setDog={setDog} seenDogs={seenDogs} setSeenDogs={setSeenDogs} />
      <TotalStyled>
        <Total seenDogs={seenDogs} dogList={dogList} />
      </TotalStyled>
    </div>
  )
}

export default List
