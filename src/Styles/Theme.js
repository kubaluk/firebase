import { ThemeProvider } from "styled-components"
import { useTheme } from "../Contexts/ThemeContext"
import GlobalStyles from "./GlobalStyles"

function Theme({children}){
  const { theme } = useTheme()

  const themes = {
    light: {
      background: "#ededed",
      main: "#fff",
      font: "#000"
    },
    dark: {
      background: "#121212",
      main: "#2a2a2a",
      font: "#ededed"
    }
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Theme