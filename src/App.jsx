//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import Section from './components/Section'
import './App.css'

import Introduction from './components/introduction/Introduction'
import WhoAmI from './components/whoami/whoami'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <Section bgColor={"#EBF4F6"}> 
        <Introduction />
      </Section>

      <Section bgColor={"#7AB2B2"}> 
        <WhoAmI />
      </Section>

    </>
  )
}

export default App
