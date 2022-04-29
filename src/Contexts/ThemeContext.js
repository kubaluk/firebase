import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

function CustomThemeProvider({children}) {
  const [theme, setTheme] = useState('light')

  function switchTheme(){
    setTheme(theme==='light' ? 'dark' : 'light')
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
