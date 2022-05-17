import { Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../../../Contexts/AuthContext'

function PrivateRoute({ children }) {
	const { currentUser } = useAuth()
	const location = useLocation()

	if (!currentUser) {
		toast.error('You are not logged in.', {
			toastId: 'uniqueId',
		})
		return <Navigate replace to='/login' state={{ from: location }} />
	}

	return children
}

export default PrivateRoute
