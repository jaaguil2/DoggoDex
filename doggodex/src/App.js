

import { useState } from 'react'
import styled from 'styled-components'

// Imported Components
import Dog from "./components/Dog/Dog"
import List from "./components/List/List"
import Helper from "./components/Helper"

// Style

const Body = styled.div`
  background-color: #EA5F42;
  border: 10px solid black;
`


const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Chewy&display=swap');
  display: flex;
  justify-content: center;
  font-size: x-large;
  color: yellow;
  text-shadow: 3px 3px blue; 
  font-family: 'Chewy', cursive;
`
const H1 = styled.h1`
  background-color: black;
  padding: 1rem;
  border-radius: 2rem;
`

function App() {

  const [dog, setDog] = useState('')  

  return (
    <Body>
      <Main >
        <Container>
          <H1>DoggoDex</H1>
        </Container>
        <div>
          <List setDog={setDog} />
          <Dog dog={ dog } />
        </div>
        <div>
          <Helper />
        </div>
      </Main>
    </Body>
  )
}

export default App;
