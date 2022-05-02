import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

function CustomThemeProvider({children}) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

  useEffect(()=>{
    localStorage.setItem('theme', theme)
  }, [theme])

  function switchTheme(){
    setTheme(prevTheme => prevTheme==='light' ? 'dark' : 'light')
  }

  const value = {theme, switchTheme}

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export {CustomThemeProvider, useTheme}
