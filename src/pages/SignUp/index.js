import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import { signUp } from '../../store/auth/actions'
import schema from '../../utils/validations/signup'
import logo from '../../assets/logo.svg'

function SignUp() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.auth.isLoading)

  function handleOnSubmit({ name, email, password }) {
    dispatch(signUp(name, email, password))
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleOnSubmit}>
        <Input name="name" type="text" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Your secret password (again)"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Register'}
        </button>
        <Link to="/">Already have an account? Enter now</Link>
      </Form>
    </>
  )
}

export default SignUp
