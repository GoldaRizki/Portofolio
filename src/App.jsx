//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'



import { Suspense, lazy } from 'react'


import LoadingPage from './components/loadingPage/loadingPage.jsx'

lazy( () => import('./App.css')) 
const Section = lazy( () => import('./components/Section'))

const Introduction = lazy( () => import('./components/introduction/Introduction'))
const WhoAmI = lazy( () => import('./components/whoami/whoami'))
const FamiliarTools = lazy( () => import('./components/familiarTools/familiarTools'))
const Experience = lazy( () => import('./components/experience/experience'))
const LifeMotto = lazy( () => import('./components/lifeMotto/lifeMotto'))
const Achievement = lazy( () => import('./components/achievement/achievement'))
const Contacts = lazy( () => import('./components/contacts/contacts'))


function App() {



  return (
    <Suspense fallback={<LoadingPage />}>

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



    </Suspense>
  )
}


export default App