//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import Section from './components/Section'
import './App.css'

import Introduction from './components/introduction/Introduction'
import WhoAmI from './components/whoami/whoami'
import FamiliarTools from './components/familiarTools/FamiliarTools'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <Section bgColor={"#EBF4F6"}> 
        <Introduction />
      </Section>

      <Section bgColor={"#09637E"}> 
        <WhoAmI />
      </Section>

      <Section bgColor={"#EBF4F6"}>
        <FamiliarTools />
      </Section>

      <Section bgColor={"#f42b24"}>

      </Section>

    </>
  )
}

export default App
