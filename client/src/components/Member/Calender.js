import {useState} from 'react';
import Calendar from 'react-calendar'; 
import React from 'react';
import '../../../src/styles/calenderView.css'
// import Time from './Time.js'


function CalendarView() {


 const [date, setDate] = useState(new Date());
 const [showTime, setShowTime] = useState(false) 

return (
  <div className='app'>
  
  <div>
   <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
  </div>

  {date.length > 0 ? (
  <p>
    <span>Start:</span>
    {date[0].toDateString()}
    &nbsp;
    &nbsp;
    <span>End:</span>{date[1].toDateString()}
  </p>
         ) : (
  <p>
     <span>Default selected date:</span>{date.toDateString()}
  </p> 
         )
  }
  {/* <Time showTime={showTime} date={date}/> */}

</div>
  )

}

export default CalendarView;