import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Karla:wght@700&display=swap');

  body{
    margin: 0%;
    padding: 0%;
    font-family: Inter, sans-serif;
    color: ${props => props.theme.font};
    background-color: ${props => props.theme.background};
  }
`

export default GlobalStyles