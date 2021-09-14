

import {useState, useEffect} from 'react'
import styled from 'styled-components'

// Imported Components
import Image from "./Image"
import Button from "./Button"

// Style
const H2 = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
    font-family: 'VT323', monospace;
`

// Main component for selected dog
function Dog({ dog }) {

  // States
  const [image, setImage] = useState('')

  // Fetch Request for image  
  const getImage = () => {
    const axios = require('axios').default

    let urlSend

    const url = {
      api: "https://dog.ceo/api/breed/",
      endpoint: "/images/random"
    }

    if (dog.length === 0) {
      urlSend = 'https://dog.ceo/api/breeds/image/random'
    } else {
      // Breaks up dog name for url
      let name = dog.toLowerCase().split(' ')
      if (name.length === 1) {
        urlSend = `${url.api}${name[0]}${url.endpoint}`
      } else {
        urlSend = `${url.api}${name[1]}/${name[0]}${url.endpoint}`
      }      
    }

    axios.get(urlSend)
    .then(res => {
      setImage(res.data.message)
    })
    .catch(error => console.log('Error:', error))
  }

  useEffect(getImage, [setImage, dog]) 

  

  return (
    <div>
      <H2>{(dog.length === 0) ? "Select A Dog" : `${dog.toUpperCase()}`}</H2>
      <Image image={image} dog={dog} />
      {(dog.length === 0) ? null : <Button getImage={getImage} />}
    </div>
  )
}

export default Dog