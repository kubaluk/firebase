import React from 'react';
import { Formik } from 'formik';
import { StyledForm, Label, Input, Submit } from '../../../Styles/StyledFormComponents'
import { useAuth } from '../../../Contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function LoginForm() {

  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  async function authenticateUser(email, password, setSubmitting){
    try {
      await login(email, password)
      setSubmitting(false);
      toast.success('Successfully logged in!')
      navigate(from, { replace: true })
    } catch (error) {
      toast.error('Login was unsuccessful')
    }
  }

  return (
    <StyledForm>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await setTimeout(() => {
            setSubmitting(true)
            authenticateUser(values.email, values.password, setSubmitting)
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid
        }) => (
          <form onSubmit={handleSubmit}>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <Submit type="submit" disabled={isSubmitting || !isValid}>
              Log in
            </Submit>
          </form>
        )}
      </Formik>
    </StyledForm>
  )
}

export default LoginForm;