import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import { Container } from './styles'
import Button from '../../components/Button'

function Profile() {
  const me = useSelector(state => state.auth.me)
  const dispatch = useDispatch()

  function handleOnSubmit() {
    dispatch()
  }

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Input name="name" value={me.name} placeholder="Full name" />
        <Input
          type="email"
          value={me.email}
          name="email"
          placeholder="Your e-mail address"
        />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Your current password"
        />
        <Input
          type="password"
          name="password"
          placeholder="Your new password"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Your password confirmation"
        />

        <Button type="submit" color="#3b9eff" text="Update" />
      </Form>

      <Button color="#F64C75" text="Logoff" />
    </Container>
  )
}

export default Profile
