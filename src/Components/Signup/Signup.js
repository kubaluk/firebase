import React from 'react'
import { StyledSignup } from '../../Styles/StyledSignup'
import SignupForm from './SingupForm'
import ThemeButton from '../ThemeButton/ThemeButton'

function Signup(){
  return (
    <>
      <ThemeButton />
      <StyledSignup>
        <SignupForm />
      </StyledSignup>
    </>
  )
}

export default Signup