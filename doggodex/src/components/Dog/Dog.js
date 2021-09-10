import {useState, useEffect} from 'react'

// Imported Components
import Image from "./Image"
import Button from "./Button"

// Main component for selected dog
function Dog({ data }) {

  // States
  const [image, setImage] = useState('')

  // TODO FIX THIS
  let dogBreed = ''
  let dogSubBreed = ''

  // prevents error from no breed selected
  let start = (dogBreed.length === 0)


  // Fetch Request for image  
  const getImage = () => {
  const axios = require('axios').default

  let urlSend

  const url = {
    api: "https://dog.ceo/api/breed/",
    endpoint: "/images/random"
  }

  if (dogBreed.length === 0) {
    urlSend = 'https://dog.ceo/api/breeds/image/random'
  } else {
    urlSend = `${url.api}${dogBreed}/${dogSubBreed}${url.endpoint}`
  }

    axios.get(urlSend)
    .then(res => {
      setImage(res.data.message)
    })
    .catch(error => console.log(error))
  }

  // useEffect
  useEffect(getImage, [setImage, dogBreed, dogSubBreed]) 

  return (
    <div>
      <h2>{start ? "Select A Dog" : `${dogSubBreed.toUpperCase()} ${dogBreed.toUpperCase()}`}</h2>
      <Image image={image} dogBreed={dogBreed} dogSubBreed={dogSubBreed} />
      {start ? null : <Button getImage={getImage} />}
    </div>
  )
}

export default Dog
