import React from 'react'
import { Formik } from 'formik'
import {
	StyledForm,
	Label,
	Input,
	Submit,
} from '../../../Styles/StyledFormComponents'
import { useAuth } from '../../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ResetForm() {
	const { resetPassword } = useAuth()
	const navigate = useNavigate()

	async function submitPasswordReset(email, setSubmitting) {
		try {
			await resetPassword(email)
			setSubmitting(false)
			toast.success('Check your inbox for more instructions')
			navigate('/login')
		} catch (error) {
			toast.error('There was an error during resetting')
		}
	}

	return (
		<StyledForm>
			<Formik
				initialValues={{ email: '' }}
				validate={(values) => {
					const errors = {}
					if (!values.email) {
						errors.email = 'Required'
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address'
					}
					return errors
				}}
				onSubmit={async (values, { setSubmitting }) => {
					await setTimeout(() => {
						setSubmitting(true)
						submitPasswordReset(values.email, setSubmitting)
						setSubmitting(false)
					}, 400)
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					isValid,
				}) => (
					<form onSubmit={handleSubmit}>
						<Label>Email</Label>
						<Input
							type='email'
							name='email'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email && errors.email}
						<Submit type='submit' disabled={isSubmitting || !isValid}>
							Reset
						</Submit>
					</form>
				)}
			</Formik>
		</StyledForm>
	)
}

export default ResetForm
