import Signup from '../Signup/Signup'
import Dashboard from '../Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Theme from '../../Styles/Theme'
import Login from '../Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

function App() {
  return (
    <>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} /> 
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Theme>
    </>
  )
}

export default App;
