import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import { signIn } from '~/store/auth/actions'
import schema from '~/utils/validations/signin'
import logo from '~/assets/logo.svg'

function SignIn() {
  const dispatch = useDispatch()

  function handleOnSubmit({ email, password }) {
    dispatch(signIn(email, password))
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleOnSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <button type="submit">Enter</button>
        <Link to="/signup">No account yet? Create one now for free</Link>
      </Form>
    </>
  )
}

export default SignIn
