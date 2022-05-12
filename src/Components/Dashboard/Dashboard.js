import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Contexts/AuthContext";


function Dashboard(){
  const { logout, currentUser } = useAuth()
  const navigate = useNavigate()

  async function handleLogout(){
    
    try{
      await logout()
      toast.success('Successfully logged out')
      navigate('/login')
    }
    catch(error){
      toast.error('There was an error while logging out')
    }
  }

  return (
    <>
      <p>Email: {currentUser.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </>
  )
}

export default Dashboard