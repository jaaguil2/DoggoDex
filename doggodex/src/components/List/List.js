

import { useState, useEffect } from "react"

// Imported Components
import ListItems from "./ListItems"
import Total from "./Total"

// Main component for list branch
function List({ setDog }) {

  // States
  const [dogList, setDogList] = useState([])
  const [seenDogs, setSeenDogs] = useState([])

  // 
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
      <Total seenDogs={seenDogs} dogList={dogList} />
      <ListItems dogList={dogList} setDog={setDog} seenDogs={seenDogs} setSeenDogs={setSeenDogs} />
    </div>
  );
};

export default List;
