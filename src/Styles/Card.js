import styled from 'styled-components'

const Card = styled.div`
	width: min(20rem, 75%);
	background-color: ${(props) => props.theme.main};
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	padding: 2rem 2rem 0;
`

export default Card
