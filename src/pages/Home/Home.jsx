import React from 'react'
import moment from 'moment'

import eventData from '../../data/events'


const introSection = (
   <section className="main-content section intro">
      <div className="container">
         <div className="content">
            <h1 className="title">Vogel Street Party</h1>
            <div>
               <p>This year the party is all about <b>Ideas and Incubation</b>.</p>
            </div>
         </div>
      </div>
   </section>
);

const eventSection = function(key, title, copy, startTime, endTime) {
   let dataFormat = 'h:mm p';
   let displayFormat = 'h:mm';
   let timeslot = {
      start: moment(startTime, dataFormat),
      end: moment(endTime, dataFormat),
   };
   let timeInfo = '';
   let emdash = '\u2014';
   if (timeslot.start.isValid()) {
      let endInfo = '';
      if (timeslot.end.isValid())
         endInfo = (<span> {emdash}<span className="timeslot-end">{timeslot.end.format(displayFormat)}</span></span>);
      timeInfo = (
         <div className="timeslot">
            <span className="timeslot-start">{timeslot.start.format(displayFormat)}</span>{endInfo}
         </div>
      );
   }
   return (
      <div key={key} className="column is-4">
         <div className="box">
            <h1 className="title">{title}</h1>
            <div>
               {copy}
            </div>
            {timeInfo}
         </div>
      </div>
   );
}

export default class Home extends React.Component {
   render() {
      let events = eventData.map((event, index) => {
         return eventSection(index, event.title, event.blurb, event.start, event.end);
      });
      return (
         <div> 
            { introSection }
            <section className="main-content section events">
               <div className="columns is-multiline">
                  { events } 
               </div>
            </section>
         </div> 
      )
   }
}
