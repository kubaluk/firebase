import styled from 'styled-components'
import Centered from '../../../Styles/Centered'
import Card from '../../../Styles/Card'
import { Link } from 'react-router-dom'

const Title = styled.h1`
	font-size: 3rem;
	text-align: center;
	margin: 0;
`

const Redirect = styled.p`
	font-size: 1rem;
	text-align: center;
	line-height: 0;
	padding-bottom: 0.75rem;
`

const StyledReset = ({ children }) => (
	<Centered>
		<Card>
			<Title>Reset Password</Title>
			{children}
			<Redirect>
				<Link to='/login'>Log in</Link>
			</Redirect>
		</Card>
	</Centered>
)

export { StyledReset }
