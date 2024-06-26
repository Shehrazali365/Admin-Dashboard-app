import React from 'react'
import { ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'
import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

function Calendar() {
  const {currentMode} = useStateContext();
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10  bg-white rounded-3xl'>
    <Header category='App' title='Calendar' />
    <ScheduleComponent
    height='650px'
    eventSettings={{dataSource: scheduleData}}
    selectedDate={new Date(2024,0,10)}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
    </ScheduleComponent>
    </div>
  )
}

export default Calendar