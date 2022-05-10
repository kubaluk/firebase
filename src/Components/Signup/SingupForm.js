import React from 'react';
import { Formik } from 'formik';
import { Label, Input, StyledSubmit } from '../../Styles/StyledForm'
import { useAuth } from '../../Contexts/AuthContext';

function SignupForm() {

  const { signup } = useAuth()

  return (
    <div>
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            signup(values.email, values.password)
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
            <StyledSubmit type="submit" disabled={isSubmitting}>
              Submit
            </StyledSubmit>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default SignupForm;