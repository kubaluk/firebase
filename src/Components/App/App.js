import Dashboard from '../Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Theme from '../../Styles/Theme'
import Login from '../Authentication/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from '../Authentication/PrivateRoute/PrivateRoute'
import NotFound from '../NotFound/NotFound'
import Signup from '../Authentication/Signup/Signup'

function App() {
	return (
		<>
			<Theme>
				<BrowserRouter>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<PrivateRoute>
									<Dashboard />
								</PrivateRoute>
							}
						/>
						<Route path='/signup' element={<Signup />} />
						<Route path='/login' element={<Login />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
					<ToastContainer />
				</BrowserRouter>
			</Theme>
		</>
	)
}

export default App
