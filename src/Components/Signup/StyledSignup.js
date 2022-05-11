import styled from 'styled-components'
import Centered from '../../Styles/Centered'
import Card from '../../Styles/Card'

const Title = styled.h1`
  font-size: clamp(2rem, 3vw, 4rem);
  text-align: center;
  line-height: 0;
`

const StyledSignup = ({children}) => (
  <Centered>
    <Card>
      <Title>Sign up</Title>
      {children}
    </Card>
  </Centered>
)

export { StyledSignup }