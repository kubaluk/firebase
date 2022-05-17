import React from 'react'
import ThemeButton from '../../ThemeButton/ThemeButton'
import ResetForm from './ResetForm'
import { StyledReset } from './StyledReset'

function ResetPassword() {
	return (
		<>
			<ThemeButton />
			<StyledReset>
				<ResetForm />
			</StyledReset>
		</>
	)
}

export default ResetPassword
