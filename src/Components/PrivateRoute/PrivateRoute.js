import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../Contexts/AuthContext'

function PrivateRoute({ children }){
  const { currentUser } = useAuth()

  if(!currentUser){
    toast.error('You are not logged in.')
    return <Navigate replace to='/login' />
  }

  return (
    <>
      {children}
    </>
  )

}

export default PrivateRoute