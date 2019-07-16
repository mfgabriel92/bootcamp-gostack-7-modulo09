import React from 'react'
import { Wrapper, Content } from './styles'

function Auth({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Auth
