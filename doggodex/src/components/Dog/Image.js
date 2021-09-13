

import styled from "styled-components"

// Style

// References:
//https://stackoverflow.com/questions/19414856/how-can-i-make-all-images-of-different-height-and-width-the-same-via-css
// https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
// I set width and height and let css w/object-fit do the rest (tries to keep aspect ratio)
const DogImage = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border: 6px solid black;
  border-radius: 3px;
`

// Displays Image
function Image({ image, dog }) {
  return (
    <DogImage src={image} alt={dog} />
  )
}

export default Image
