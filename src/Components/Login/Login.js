import React from 'react'
import LoginForm from './LoginForm'
import ThemeButton from '../ThemeButton/ThemeButton'
import { StyledLogin } from './StyledLogin'


function Login(){
  return (
    <>
      <ThemeButton />
      <StyledLogin>
        <LoginForm />
      </StyledLogin>
    </>
  )
}

export default Login