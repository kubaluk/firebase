import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import { AuthProvider } from './Contexts/AuthContext'
import { CustomThemeProvider } from './Contexts/ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<AuthProvider>
			<CustomThemeProvider>
				<App />
			</CustomThemeProvider>
		</AuthProvider>
	</React.StrictMode>
)
