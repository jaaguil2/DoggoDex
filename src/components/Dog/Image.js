

import { useState, useEffect } from "react"
import styled from "styled-components"

// Style

// References:
//https://stackoverflow.com/questions/19414856/how-can-i-make-all-images-of-different-height-and-width-the-same-via-css
// https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
// I set width and height and let css w/object-fit do the rest (tries to keep aspect ratio)
const DogImage = styled.img`
  width: 80%;
  height: 500px;
  object-fit: contain;
  border: 6px groove lightgray;
  border-radius: 3px;
  background-color: black;
`

// Displays Image
function Image({ image, dog, index }) {

  const [sendingImage, setSendingImage] = useState('#')  

  useEffect(() => {
    if (typeof image === 'string') {
      setSendingImage(image)
    } else {
      setSendingImage(image[index])
    }
  }, [image, index])

  return (
    <DogImage src={sendingImage} alt={dog} />
  )
}

export default Image
