import React from 'react'
import Container from './components/Container'
import Header from './components/Header'
import LanguageSelector from './components/LanguageSelector'
import Content from './components/Content'
import Education from './components/Education'
import Languages from './components/Languages'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Experiences from './components/Experiences'

function App() {
  return (
    <Container>
      <LanguageSelector />
      <Header />
      <Content>
        <div className="first-col">
          <Experiences />
        </div>
        <div className="second-col">
          <Contact />
          <Skills />
          <Education />
          <Certificates />
          <Languages />
        </div>
      </Content>
    </Container>
  )
}

export default App
