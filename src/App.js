

import { useState } from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

// Imported Components
import Dog from "./components/Dog/Dog"
import List from "./components/List/List"
import Helper from "./components/Helper"

// Style
const Body = styled.div`
  background-color: #EA5F42;
  border: 10px solid black;
  // makes this div take up the screen, vh/vw is the viewport height and width, both set to 100%
  height: 100vh;
  width: 100vw;
`

const Main = styled.main`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
`
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Chewy&display=swap');
  display: flex;
  justify-content: center;
  color: yellow;
  text-shadow: 3px 3px blue; 
  font-family: 'Chewy', cursive;
`
const H1 = styled.h1`
  background-color: black;
  padding: 1rem;
  border-radius: 2rem;
  font-size: xx-large;
`

const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  margin: 1rem;
  padding: 1rem;
  border: 6px solid black;
  border-radius: 5px;
`

function App() {

  const [dog, setDog] = useState('')  

  return (
    <Body>
      <Route path='/' render={() =>
        <Main >
          <Container>
            <H1>DoggoDex</H1>
          </Container>
          <MainSection>
            <List setDog={setDog} />
            <Dog dog={dog} />
          </MainSection>
          <div>
            <Helper />
          </div>
        </Main>
      } />
      
    </Body>
  )
}

export default App;
