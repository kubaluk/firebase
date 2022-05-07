import Signup from '../Signup/Signup'
import Dashboard from '../Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Theme from '../../Styles/Theme'

function App() {
  return (
    <>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Theme>
    </>
  )
}

export default App;
