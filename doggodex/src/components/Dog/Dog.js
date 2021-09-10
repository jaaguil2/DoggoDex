import {useState, useEffect} from 'react'

// Imported Components
import Image from "./Image"
import Button from "./Button"

// Main component for selected dog
function Dog({ data }) {

  // States
  const [image, setImage] = useState('')

  // TODO FIX THIS
  let dogBreed = 'hound'
  let dogSubBreed = 'afghan'


  // Fetch Request for image  
    const getImage = () => {
    const axios = require('axios').default

    const url = {
      api: "https://dog.ceo/api/breed/",
      endpoint: "/images/random"
    }

    axios.get(`${url.api}${dogBreed}/${dogSubBreed}${url.endpoint}`)
      .then(res => {
        setImage(res.data.message)
      })
      .catch(error => console.log(error))
  }


  useEffect(getImage, [setImage, dogBreed, dogSubBreed])

  // useEffect

  return (
    <div>
      <h2>{`${dogSubBreed.toUpperCase()} ${dogBreed.toUpperCase()}`}</h2>
      <Image image={image} dogBreed={dogBreed} dogSubBreed={dogSubBreed} />
      <Button getImage={getImage} />
    </div>
  )
}

export default Dog
