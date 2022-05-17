import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

function useAuth() {
	return useContext(AuthContext)
}

function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password)
	}

	function logout() {
		return signOut(auth)
	}

	function resetPassword(email) {
		return sendPasswordResetEmail(auth, email)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
		})

		return unsubscribe
	}, [])

	const value = {
		currentUser,
		signup,
		login,
		logout,
		resetPassword,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { useAuth, AuthProvider }
