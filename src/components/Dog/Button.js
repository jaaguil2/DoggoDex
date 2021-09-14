

import styled from "styled-components"

// Style
const StyledButton = styled.button`
margin-top: .5rem;
  background-color: blue;
  color: white;
`

// Will fetch new image
function Button({ getImage }) {
  return (
    <StyledButton onClick={getImage}>New Image</StyledButton>
  )
}

export default Button
