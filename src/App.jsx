import { useState } from 'react'
import './App.css'
import Presentation from './Presentation'
import Header from './Header'
import { ThemeProvider } from './theme/ThemeContext'
import Tecnologies from './Tecnologies'
import Projects from './components/Projects'
function App() {
  
  return (
    <ThemeProvider>
    <>
      <Header/>
      <Presentation/>
      <Tecnologies/>
      <Projects/>
    </>
    </ThemeProvider>
  )
}

export default App
