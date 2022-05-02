import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0%;
    padding: 0%;
    font-family: Inter, sans-serif;
    color: ${props => props.theme.font};
    background-color: ${props => props.theme.background};
  }
`

export default GlobalStyles