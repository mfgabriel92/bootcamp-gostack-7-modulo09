import React from 'react'
import { MdNotifications } from 'react-icons/md'
import { Container, Badge, Notifications, Scroll, Note } from './styles'

function Notification() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#6004e0" size={24} />
        <span>9+</span>
      </Badge>

      <Notifications>
        <Scroll>
          <Note unread>
            <p>Lorem ipsum dolor sit amet</p>
            <time>2 days ago</time>
          </Note>
          <Note>
            <p>Lorem ipsum dolor sit amet</p>
            <time>2 days ago</time>
          </Note>
          <Note>
            <p>Lorem ipsum dolor sit amet</p>
            <time>2 days ago</time>
          </Note>
          <Note unread>
            <p>Lorem ipsum dolor sit amet</p>
            <time>2 days ago</time>
          </Note>
          <Note>
            <p>Lorem ipsum dolor sit amet</p>
            <time>2 days ago</time>
          </Note>
          <Note>
            <p>Lorem ipsum dolor sit amet</p>
            <time>2 days ago</time>
          </Note>
          <Note unread>
            <p>Lorem ipsum dolor sit amet</p>
            <time>2 days ago</time>
          </Note>
          <Note>
            <p>Lorem ipsum dolor sit amet</p>
            <time>2 days ago</time>
          </Note>
          <Note>
            <p>Lorem ipsum dolor sit amet</p>
            <time>2 days ago</time>
          </Note>
        </Scroll>
      </Notifications>
    </Container>
  )
}

export default Notification
