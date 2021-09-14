

import styled from "styled-components"

// Style
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  font-family: 'VT323', monospace;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  border: darkgrey solid 1px;
  background-color: darkgrey;
`

const Input = styled.p`
  margin: 5px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #EAB342;
  box-shadow: 3px 3px #C89A42;
  border-radius: 3px;  
  &:hover{
    color: white;
  }
`

const Name = styled(Input)`
  background-color: #42EA5F;
  box-shadow: 3px 3px #45CE5D;
  &:hover{
    color: white;
  }
`

// Component to build each item
function Item({name, setDog, seenDogs, setSeenDogs, line}) { 
  
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

  const style = {
    textDecoration: line ? "line-through" : "none"
  }

  return (
    <Container>
      <Name onClick={clicked} >{name.toUpperCase()}</Name>
      <Input id={name} onClick={handleChecked} style={style} >SEEN</Input>
    </Container>    
  );
};

export default Item
