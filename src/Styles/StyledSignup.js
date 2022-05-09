import styled from 'styled-components'
import Centered from './Centered'
import { StyledForm } from './StyledForm'

const Card = styled.div`
  width: min(20rem, 75%);
  background-color: ${props => props.theme.main};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0;
`

const Title = styled.h1`
  font-size: clamp(2rem, 3vw, 4rem);
  text-align: center;
  line-height: 0;
`

const StyledSignup = ({children}) => (
  <Centered>
    <Card>
      <Title>Sign up</Title>
      <StyledForm>
        {children}
      </StyledForm>
    </Card>
  </Centered>
)

export { StyledSignup }