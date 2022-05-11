import styled from 'styled-components'

const StyledForm = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Label = styled.label`
  display: block;
  font-size: clamp(1rem, 2vw, 1.1rem);
  text-align: center;
`

const Submit = styled.button`
  display: block;
  padding: 1rem;
  width: max(50%, 6rem);
  margin: 1rem auto;

  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: ${props => props.theme.font};
  background-color: ${props => props.theme.background};
  border: none;
  border-radius: 0.5rem;
`

const Input = styled.input`
  width: max(100%, 10rem);
  padding: 0.75rem 1.25rem;
  margin: 0.5rem 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

export { Label, Input, StyledForm, Submit }