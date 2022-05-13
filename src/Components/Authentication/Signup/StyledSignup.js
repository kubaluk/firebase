import styled from 'styled-components'
import Centered from '../../../Styles/Centered'
import Card from '../../../Styles/Card'
import { Link } from 'react-router-dom'

const Title = styled.h1`
  font-size: clamp(2rem, 3vw, 4rem);
  text-align: center;
  line-height: 0;
`

const Redirect = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 0;
  padding-bottom: 0.75rem;
`

const StyledSignup = ({children}) => (
  <Centered>
    <Card>
      <Title>Sign up</Title>
      {children}
      <Redirect>Already have an account? <Link to='/login'>Sign in</Link></Redirect>
    </Card>
  </Centered>
)

export { StyledSignup }