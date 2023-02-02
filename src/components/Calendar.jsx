import React from 'react'
import { useState } from 'react'
import "../css/Calendar.css"

export default function Calendar() {

    let newDate = new Date()
    // const testDay = [8, 1]
    // newDate.setMonth(testDay[1] - 1)
    // newDate.setDate(testDay[0])

    let date = newDate.getDate()
    let month = newDate.getMonth() + 1
    // let year = newDate.getFullYear()
    let day = newDate.getDay()

    if(day == 0) day = 7

    // #region Week
    function lastDayOfMonth(month) {
      const longMonths = [0, 2, 4, 6, 7, 9, 11]
      const shortMonths = [3, 5, 8, 10]
      if (month == 1)
      return 28
      else if (shortMonths.includes(month))
      return 30
      else if (longMonths.includes(month))
      return 31
    }

    function getWeek(date, day, month) {
      const week = []
      let firstDayofWeek = date - day + 1

      for(let i = 0; i < 7; i++){
        const _day = firstDayofWeek + i
        
        if(_day > lastDayOfMonth(month)){               // day cannot be greater than 31
          week.push(_day - lastDayOfMonth(month))     
        }
        else if(_day <= 0){                             // day must be greater than 0
          if(month == 0)
          week.push(_day + 31)
          else
          week.push(_day + lastDayOfMonth(month - 1))
        }
        else
        week.push(_day)                                 // casual case
      }

      let i = 0
      const _week = week.map(el => {
        i++ 
        return <button key={i - 1} className={`day ${day == (i) ? 'today' : ''}`}>{week[i - 1]}</button>
      })

      return _week
    }
    
    const week = getWeek(date, day, month - 1)
    const _weekDay = [
      {name: 'Mon', id: 0},
      {name: 'Tue', id: 1},
      {name: 'Wen', id: 2},
      {name: 'Thu', id: 3},
      {name: 'Fri', id: 4},
      {name: 'Sat', id: 5},
      {name: 'Sun', id: 6},
    ]
    

    // #endregion

    const weekDay = _weekDay.map(el => {
      return <button key={el.id} className={`weekDay ${day == el.id + 1 ? 'todayWeekDay' : ''}`}>{el.name}</button>
    })

    const _hours = [
      { hour: "00:00", id: 0}, 
      { hour: "01:00", id: 1}, 
      { hour: "02:00", id: 2}, 
      { hour: "03:00", id: 3}, 
      { hour: "04:00", id: 4}, 
      { hour: "05:00", id: 5}, 
      { hour: "06:00", id: 6}, 
      { hour: "07:00", id: 7}, 
      { hour: "08:00", id: 8}, 
      { hour: "09:00", id: 9}, 
      { hour: "10:00", id: 10}, 
      { hour: "11:00", id: 11}, 
      { hour: "12:00", id: 12}, 
      { hour: "13:00", id: 13}, 
      { hour: "14:00", id: 14}, 
      { hour: "15:00", id: 15}, 
      { hour: "16:00", id: 16}, 
      { hour: "17:00", id: 17}, 
      { hour: "18:00", id: 18}, 
      { hour: "19:00", id: 19}, 
      { hour: "20:00", id: 20}, 
      { hour: "21:00", id: 21}, 
      { hour: "22:00", id: 22}, 
      { hour: "23:00", id: 23},
    ]

    const hours = _hours.map(el => {
      return <div key={el.id} className='planBackgroundElement'>{el.hour}</div>
    })


    const events = [
      { id: 0, start: '21:00', end: '21:30', elementText: 'zrobić zakupy2' },
      { id: 1, start: '22:00', end: '23:00', elementText: 'zrobić zakupy' },
      { id: 2, start: '12:00', end: '12:10', elementText: 'zrobić d' },
      { id: 3, start: '7:00', end: '9:10', elementText: 'ugotować zupę' },
      { id: 4, start: '7:00', end: '8:10', elementText: 'ugotować zupę' },
      { id: 5, start: '7:30', end: '8:10', elementText: 'ugotować zupę' }
    ]

    const _events = events.map(el => {
      const start = parseInt(el.start.split(':')[0] * 60) + parseInt(el.start.split(':')[1])
      const end = parseInt(el.end.split(':')[0] * 60) + parseInt(el.end.split(':')[1])

      if(otherEventsDuringThisEvent(el.start, el.end) > 0){
        console.log(el.id)
      }

      return(
        <div key={el.id} className='event' style={{
            height: `${end - start}px`, 
            transform: `translate(0, ${start}px)`,
            width: (`calc(calc(100% - 80px)/${(1 + otherEventsDuringThisEvent(el.start, el.end))})`),
            left: '65px'
          }}>
           <p>{end - start >= 30 ? el.elementText : ''}</p>
        </div>
      )
    })

    function otherEventsDuringThisEvent(eventStart, eventEnd) {
      let otherEvents = 0
      eventStart = parseInt(eventStart.replace(':', ''))
      eventEnd = parseInt(eventEnd.replace(':', ''))

      for(let i = 0; i < events.length; i++) {
        if(parseInt(eventStart) < events[i].end.replace(':', '') && parseInt(eventEnd) > events[i].start.replace(':', '')){
          otherEvents++
        }     
      }

      otherEvents--
      return otherEvents
    }

  return (
    <>
    <div className='calendarWeekDay'>
        {weekDay}
    </div>
    <div className='calendarWeek'>
        {week}
    </div>
    <div className='planContainer'>
    <div className='planBackground'>{hours}</div>
      <div className='plan'>
        {_events}
      </div>
    </div>
    </>
  )
}
