import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Container, Schedule } from './styles'

function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={32} color="#fff" />
        </button>
        <strong>July 19th</strong>
        <button type="button">
          <MdChevronRight size={32} color="#fff" />
        </button>
      </header>

      <ul>
        <Schedule past>
          <strong>08:00</strong>
          <span>Lorem Ipsum</span>
        </Schedule>
        <Schedule available>
          <strong>09:00</strong>
          <span>Open</span>
        </Schedule>
        <Schedule>
          <strong>10:00</strong>
          <span>Lorem Ipsum</span>
        </Schedule>
        <Schedule>
          <strong>11:00</strong>
          <span>Lorem Ipsum</span>
        </Schedule>
      </ul>
    </Container>
  )
}

export default Dashboard
