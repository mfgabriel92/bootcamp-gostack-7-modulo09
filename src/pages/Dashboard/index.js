import React, { useState, useMemo } from 'react'
import { format, subDays, addDays } from 'date-fns'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Container, Schedule } from './styles'

function Dashboard() {
  const [date, setDate] = useState(new Date())
  const formattedDate = useMemo(() => format(date, "do 'of' MMMM"), [date])

  function handleDecreaseOneDay() {
    setDate(subDays(date, 1))
  }

  function handleIncreaseOneDay() {
    setDate(addDays(date, 1))
  }

  function handleBackToToday() {
    setDate(new Date())
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleDecreaseOneDay}>
          <MdChevronLeft size={32} color="#fff" />
        </button>
        <strong>{formattedDate}</strong>
        <button type="button" onClick={handleIncreaseOneDay}>
          <MdChevronRight size={32} color="#fff" />
        </button>
      </header>

      <button onClick={handleBackToToday}>Back to today</button>

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
