

import styled from "styled-components"

// Style
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  font-family: 'VT323', monospace;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: black;
  color: white;
  margin-bottom: 5px;
  border-radius: 10px;
`

const Input = styled.p`
  margin: 5px;
  border: solid black 2px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: darkgrey;
  border-radius: 3px;
`

// Component to build each item
function Item({name, setDog, seenDogs, setSeenDogs}) { 
  

  const clicked = (e) => {
    setDog(e.currentTarget.innerText)
  }

  const handleChecked = (e) => {
    let target = e.target.id
    let newArr = seenDogs.slice()
    if (newArr.includes(target)) {
      newArr = newArr.filter(dog => dog !== target)
    } else {
      newArr.push(target)
    }
    setSeenDogs(newArr)
  }

  return (
    <Container>
      <Input id={name} type='checkbox' onClick={handleChecked}>SEEN</Input>
      <p onClick={clicked}> {name.toUpperCase()}</p>
    </Container>
    
  );
};

export default Item
