import React from 'react'
import {Calendar, dateFnsLocalizer} from "react-big-calendar"
import format from "date-fns/format"
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from "date-fns/getDay"
import enUs from "date-fns/locale/en-US"
import "react-big-calendar/lib/css/react-big-calendar.css"

const locales = {
  "en-US" : enUs
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "ACM Workshop",
    allDay: true,
    start: new Date(2022, 8, 16),
    end: new Date(2022,8,16)
  },
  {
    title: "LoopBack",
    allDay: true,
    start: new Date(2022, 9, 16),
    end: new Date(2022,9,16)
  },
  {
    title: "Changing Interships",
    allDay: true,
    start: new Date(2022, 8, 16),
    end: new Date(2022,8,16)
  }
]



const Contact = () => {
  return (
    <div>

      <Calendar localizer={localizer} events ={events} startAccessor = "start" endAccessor="end" style = {{height:500, margin: "50px"}}/>
    </div>
  )
}

export default Contact

