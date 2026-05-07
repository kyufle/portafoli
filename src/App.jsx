import { useState } from 'react'
import './App.css'
import Presentation from './Presentation'
import Header from './Header'
import { useTheme } from './theme/ThemeContext'
import Tecnologies from './Tecnologies'
import Projects from './components/Projects'
import { createTheme, ThemeProvider as MuiThemeProvider, styled } from '@mui/material/styles';

function App() {
  const { isDark } = useTheme();
  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
    },
  });

  return (
      <MuiThemeProvider theme={theme}>
        <Header/>
        <Presentation/>
        <Tecnologies/>
        <Projects/>
      </MuiThemeProvider>
  )
}

export default App
