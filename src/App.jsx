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

  return (
    <>

      <Section id="introduction" bgColor="#F5F8FA"> 
        <Introduction />
      </Section>

      <Section id="profesiSaya" bgColor="#F5F8FA" paddingTop="80vh" paddingBottom="20vh"> 
        <WhoAmI />
      </Section>

      <Section id="experience" bgColor="#F5F8FA" paddingTop="60vh" paddingBottom="30vh">
        <Experience />
      </Section>
      
      <Section id="familiarTools" bgColor="#F5F8FA" paddingTop="30vh" paddingBottom="40vh">
        <FamiliarTools />
      </Section>

      <Section id="achievement" bgColor="#F5F8FA" paddingTop="50vh" paddingBottom="30vh">
        <Achievement />
      </Section>

      <Section id="lifeMotto" bgColor="#F5F8FA" paddingTop="30vh" paddingBottom="30vh">
        <LifeMotto />      
      </Section>

      <Section id="contacts" bgColor="#F5F8FA" paddingTop="30vh" paddingBottom="20vh">
        <Contacts />
      </Section>



    </>
  )
}

export default App
