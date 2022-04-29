import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import { CustomThemeProvider } from './Contexts/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
