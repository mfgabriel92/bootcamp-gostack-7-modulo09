import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import schema from '~/utils/validations/signup'
import logo from '~/assets/logo.svg'

function SignUp() {
  function handleOnSubmit(data) {}

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleOnSubmit}>
        <Input name="fullName" type="text" placeholder="Full name" />
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
        <button type="submit">Register</button>
        <Link to="/">Already have an account? Enter now</Link>
      </Form>
    </>
  )
}

export default SignUp
