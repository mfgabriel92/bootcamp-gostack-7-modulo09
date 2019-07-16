import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo.svg'

function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your secret password" />
        <button type="submit">Enter</button>
        <Link to="/signup">No account yet? Create one now for free</Link>
      </form>
    </>
  )
}

export default SignIn
