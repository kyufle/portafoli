import { useState } from 'react'
import './App.css'
import Presentation from './Presentation'
import Header from './Header'
import { ThemeProvider } from './theme/ThemeContext'

function App() {
  
  return (
    <ThemeProvider>
    <>
      <Header/>
      <Presentation/>
    </>
    </ThemeProvider>
  )
}

export default App
