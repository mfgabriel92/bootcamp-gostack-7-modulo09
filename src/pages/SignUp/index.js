import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo.svg'

function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your secret password" />
        <input type="password" placeholder="Your secret password (again)" />
        <button type="submit">Register</button>
        <Link to="/">Already have an account? Enter now</Link>
      </form>
    </>
  )
}

export default SignUp
