import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Styles/GlobalStyles';
import { LightTheme, DarkTheme } from '../../Styles/Themes';
import Signup from '../Signup/Signup';

function App() {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyles />
        <Signup />
      </ThemeProvider>
    </>
  )
}

export default App;
