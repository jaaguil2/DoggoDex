import styled from "styled-components"

const P = styled.p`
  color: lightgrey;
  padding: .5rem;
`
// Basic helper information
function Helper() {
  return <P>If you've seen the dog, click SEEN. Select a dog for a cool image. You <em>have</em> to see them all!</P>
}

export default Helper;