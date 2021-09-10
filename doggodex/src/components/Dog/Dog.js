import {useState, useEffect} from 'react'

// Imported Components
import Image from "./Image"
import Button from "./Button"

// Main component for selected dog
function Dog({ data }) {

  // States
  const [dogBreed, setDogBreed] = useState('hound')
  const [dogSubBreed, setDogSubBreed] = useState('afghan')


  // Fetch Request for image
  
  useEffect(() => {
    const axios = require('axios').default

    const url = {
      api: "https://dog.ceo/api/breed/",
      endpoint: "/images/random"
    }

    axios.get(`${url.api}${dogBreed}/${dogSubBreed}${url.endpoint}`)
      .then(res => {
        console.log(res)
      })
      .catch(error => console.log(error))


  }, [])




  return (
    <div>
      <h2>{data.name}</h2>
      <Image image={ data.image } />
      <Button />
    </div>
  )
}

export default Dog
