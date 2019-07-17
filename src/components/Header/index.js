import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Notification from '../Notification'
import { Container, Content, Me } from './styles'
import logo from '../../assets/logo-colored.png'
import noImage from '../../assets/no-image.png'

function Header() {
  const me = useSelector(state => state.auth.me)

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />

          <Me>
            <div>
              <strong>{me.name}</strong>
              <Link to="/me">Profile</Link>
            </div>
            <img src={me.avatar ? me.avatar : noImage} alt="" />
          </Me>
        </aside>
      </Content>
    </Container>
  )
}

export default Header
