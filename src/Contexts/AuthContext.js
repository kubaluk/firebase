import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState }from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

function useAuth(){
  return useContext(AuthContext)
}

function AuthProvider({ children }){
  const [currentUser, setCurrentUser] = useState()

  function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  
  
  const value = {
    currentUser,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }