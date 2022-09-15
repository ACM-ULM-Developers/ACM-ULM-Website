import React, {useState} from 'react'
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
    end: new Date(2022,8,16),
    description: "ACM WorkShop"
  },
  {
    title: "LoopBack",
    allDay: true,
    start: new Date(2022, 9, 16),
    end: new Date(2022,9,16),
    description: "ACM WorkShop"
  },
  {
    title: "Changing Interships",
    allDay: true,
    start: new Date(2022, 8, 16),
    end: new Date(2022,8,16),
    description: "ACM WorkShop"
  }
]



const Contact = () => {

  const [selectedEvent, setSelectedEvent] = useState(undefined);
  const[modalState, setModalState] = useState(false);

  const handleSelectedEvent = (event) =>{
    setSelectedEvent(event)
    setModalState(true)
  }


 
  const Modal =()=>{
    //Function to hide the event description
    const hide = ()=>{
      setModalState(false)
    }
    return(
      <div className = {`modal-${modalState == true ?'show': 'hide'}`} >
       Event Description: Details will be published soon. 
       <div> <button onClick={hide} >Hide Me</button></div>
      </div>
    )
  }



  return (
    <div>
      {selectedEvent && <Modal/>}
      <Calendar  selectable localizer={localizer} events ={events} startAccessor = "start" endAccessor="end" onSelectEvent={handleSelectedEvent} style = {{height:500, margin: "50px"}}/>
    </div>
  )
}

export default Contact

