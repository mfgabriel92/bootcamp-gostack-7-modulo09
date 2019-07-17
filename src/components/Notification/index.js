import React, { useState, useEffect, useMemo } from 'react'
import { MdNotifications } from 'react-icons/md'
import { parseISO, formatDistance } from 'date-fns'
import { Container, Badge, Notifications, Scroll, Note } from './styles'
import api from '../../services/api'

function Notification() {
  const [isVisible, setIsVisible] = useState(false)
  const [notifications, setNotifications] = useState([])
  const hasUnread = useMemo(
    () => notifications.filter(notification => notification.isRead === false),
    [notifications]
  )
  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('/notifications')
      const data = response.data.notifications.map(notification => ({
        ...notification,
        timeAgo: formatDistance(parseISO(notification.createdAt), new Date(), {
          addSuffix: true,
        }),
      }))

      setNotifications(data)
    }

    loadNotifications()
  }, [])

  async function handleMarkAsRead({ _id }) {
    await api.put(`/notifications/${_id}`)

    setNotifications(
      notifications.map(notification =>
        notification._id === _id
          ? { ...notification, isRead: true }
          : notification
      )
    )
  }

  return (
    <Container>
      <Badge onClick={() => setIsVisible(!isVisible)} hasUnread={hasUnread}>
        <MdNotifications color="#6004e0" size={24} />
        <span>{hasUnread.length}</span>
      </Badge>

      <Notifications isVisible={isVisible}>
        <Scroll>
          {notifications.map(notification => (
            <Note key={notification.id} isUnread={!notification.isRead}>
              <p>{notification.message}</p>
              <div>
                <time>{notification.timeAgo}</time>
                {!notification.isRead && (
                  <button
                    type="button"
                    onClick={() => handleMarkAsRead(notification)}
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </Note>
          ))}
        </Scroll>
      </Notifications>
    </Container>
  )
}

export default Notification
