import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import schema from '~/utils/validations/signin'
import logo from '~/assets/logo.svg'

function SignIn() {
  function handleOnSubmit(data) {}

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
