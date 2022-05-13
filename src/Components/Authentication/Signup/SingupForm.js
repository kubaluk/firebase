import React from 'react';
import { Formik } from 'formik';
import { StyledForm, Label, Input, Submit } from '../../../Styles/StyledFormComponents'
import { useAuth } from '../../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function SignupForm() {

  const { signup } = useAuth()
  const navigate = useNavigate()

  return (
    <StyledForm>
      <Formik
        initialValues={{ email: '', password: '', confirm: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if(values.password !== values.confirm){
            errors.confirm = 'Passwords must be the same'
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await setTimeout(() => {
            setSubmitting(true)
            signup(values.email, values.password)
            setSubmitting(false);
            toast.success('Successfully created an account!')
            navigate('/')
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
            <Label>Confirm password</Label>
            <Input
              type="password"
              name="confirm"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirm}
            />
            {errors.confirm && touched.confirm && errors.confirm}
            <Submit type="submit" disabled={isSubmitting || !isValid}>
              Sign up
            </Submit>
          </form>
        )}
      </Formik>
    </StyledForm>
  )
}

export default SignupForm;