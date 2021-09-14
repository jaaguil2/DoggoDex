

import styled from "styled-components"

// Style
const StyledButton = styled.button`
margin-top: .5rem;
margin-right: 1rem;
background-color: blue;
color: white;
`

// Will fetch new image
function Button({ setIndex, index, image }) {

  const updateIndexUp = () => {    
    index++
    if (index === image.length) {
      index = 0
    }
    setIndex(index)
  }

  const updateIndexDown = () => {    
    index--
    if (index < 0) {
      index = image.length - 1
    }
    setIndex(index)
  }


  return (
    <div>
      <StyledButton onClick={updateIndexDown}>-</StyledButton>
      <StyledButton onClick={updateIndexUp}>+</StyledButton>
    </div>
  )
}

export default Button
