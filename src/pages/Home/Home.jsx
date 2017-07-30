import _ from 'lodash'

import React from 'react'
import moment from 'moment'

// import eventData from '../../data/events'

import googleEventData from '../../data/20170730-testdata'

let googleNiceData = googleEventData.feed.entry.map((item) => {
   return {
      title: item['gsx$title']['$t'],
      blurb: item['gsx$blurb']['$t'],
      start: item['gsx$start']['$t'],
      end: item['gsx$end']['$t'],
      allDay: item['gsx$allday']['$t'],
      location: item['gsx$location']['$t'],
      category: item['gsx$category']['$t'],
   }
});

const introSection = (
   <section className="main-content section intro">
      <div className="container">
         <div className="content intro">
            <h1 className="title">Vogel Street Party 2017</h1>
            <div>
               <p>This year the party is all about <b>Ideas and Incubation</b>.</p>
               <p>Saturday the 14th October, Vogel Street, Dunedin</p>
               <p>Free &amp; all-ages!</p>
            </div>
         </div>
      </div>
   </section>
);

let tidyEventItem = (options) => {
   let event = options;
   event.display = {
      startTime: '',
      endTime: '',
   }

   let dataFormat = 'h:mm p';
   let displayFormat = 'h:mm';
   event.timeslot = {
      start: moment("2pm", dataFormat),
      end: moment("10pm", dataFormat),
   };

   if (event.allDay) {
      event.display.startTime = 'all day';
   }
   else {
      event.timeslot = {
         start: moment(options.start, dataFormat),
         end: moment(options.end, dataFormat),
      };
      if (event.timeslot.start.isValid()) {
         event.display.startTime = event.timeslot.start.format(displayFormat);
         if (event.timeslot.end.isValid()) 
            event.display.endTime = event.timeslot.end.format(displayFormat);
      }
   }

   return event;
}

const eventBox = function(key, title, copy, location, startTime, endTime, category) {
   let dataFormat = 'h:mm p';
   let displayFormat = 'h:mm';
   let timeInfo = '';
   let emdash = '\u2014';
   let classes = "box event ";
   if (category == 'building') 
      classes += 'vsp-yellow-1'; 
   else if (category == 'performance') 
      classes += 'vsp-yellow-2'; 
   else if (category == 'installation') 
      classes += 'vsp-yellow-3'; 
   else if (category == 'activity') 
      classes += 'vsp-yellow-4'; 
   else if (category == 'music') 
      classes += 'vsp-yellow-5'; 
   if (startTime) {
      let endInfo = '';
      if (endTime)
         endInfo = (<span> {emdash} <span className="timeslot-end">{endTime}</span></span>);
      timeInfo = (
         <div className="event-timeslot column">
            <span className="timeslot-start">{startTime}</span>{endInfo}
         </div>
      );
   }
   return (
      <div key={key} className="column is-4">
         <div className={classes}>
            <h1 className="title event-title">{title}</h1>
            <div>
               {copy}
            </div>
            <div className="columns event-details">
               <div className="event-location column">
                  {location}
               </div>
               {timeInfo}
            </div>
         </div>
      </div>
   );
}

export default class Home extends React.Component {
   render() {
      let events = googleNiceData.map(tidyEventItem);
      events = _.sortBy(events, 'timeslot.start', (a, b) => { return a-b; })

      let eventComponents = events.map((event, index) => {
         return eventBox(index, event.title, event.blurb, event.location, 
            event.display.startTime, event.display.endTime,
            event.category);
      });
      return (
         <div> 
            { introSection }
            <section className="main-content section events">
               <div className="columns is-multiline">
                  { eventComponents } 
               </div>
            </section>
         </div> 
      )
   }
}
