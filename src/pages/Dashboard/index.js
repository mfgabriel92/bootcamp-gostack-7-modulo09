import React, { useState, useEffect, useMemo } from 'react'
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import api from '../../services/api'
import { Container, Schedule } from './styles'

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function Dashboard() {
  const [appointments, setAppointments] = useState([])
  const [date, setDate] = useState(new Date())
  const formattedDate = useMemo(() => format(date, "do 'of' MMMM"), [date])

  useEffect(() => {
    async function loadSchedules() {
      const response = await api.get('schedules', {
        params: {
          date,
        },
      })

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0)
        const compareDate = utcToZonedTime(checkDate, timezone)

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.appointments.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        }
      })
      console.log(data)
      setAppointments(data)
    }

    loadSchedules()
  }, [date])

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
        {appointments.map(appointment => (
          <Schedule
            key={appointment.time}
            past={appointment.past}
            available={!appointment.appointment}
          >
            <strong>{appointment.time}</strong>
            <span>
              {appointment.appointment ? appointment.user.name : 'Open'}
            </span>
          </Schedule>
        ))}
      </ul>
    </Container>
  )
}

export default Dashboard
