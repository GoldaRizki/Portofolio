//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import Section from './components/Section'
import './App.css'

import Introduction from './components/introduction/Introduction'
import WhoAmI from './components/whoami/whoami'
import FamiliarTools from './components/familiarTools/familiarTools'
import Experience from './components/experience/experience'
import LifeMotto from './components/lifeMotto/lifeMotto'
import Achievement from './components/achievement/achievement'
import Contacts from './components/contacts/contacts'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

      <Section id="introduction" bgColor="#EBF4F6"> 
        <Introduction />
      </Section>

      <Section id="profesiSaya" bgColor="#FFD150"> 
        <WhoAmI />
      </Section>

      <Section id="familiarTools" bgColor="#EBF4F6">
        <FamiliarTools />
      </Section>

      <Section id="experience" bgColor="#072227">
        <Experience />
      </Section>

      <Section id="lifeMotto" bgColor="#EBF4F6">
        <LifeMotto />      
      </Section>


      <Section id="achievement" bgColor="#EBF4F6">
        <Achievement />
      </Section>


      <Section id="contacts" bgColor="#EBF4F6">
        <Contacts />
      </Section>



    </>
  )
}

export default App
