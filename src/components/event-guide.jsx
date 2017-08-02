import _ from 'lodash'

import React from 'react'
import moment from 'moment'


// import eventData from '../../data/events'

import googleEventData from '../data/20170730-testdata'

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
   let classes = "box event";
   classes += " " + category;
   if (location == "Vogel Stage")
      classes += " " + 'vogel-stage';
   if (location == "Queens Gardens Stage")
      classes += " " + 'queens-stage';
   // if (category == 'building' || 
   //       category == 'performance' || 
   //       category == 'installation' ||
   //       category == 'activity') 
   //    classes += 'vsp-leaf-green'; 
   // else if (category == 'music') 
   //    classes += 'vsp-night-blue'; 
   // else if (category == 'food') 
   //    classes += 'vsp-yellow-4'; 
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
   // we're not using blurb right now
   let blurb = (
      <div>
         {copy}
      </div>
   );
   return (
      <div key={key} className="column is-4">
         <div className={classes}>
            <h1 className="title event-title">{title}</h1>
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

export default function EventGuide(props) { //extends React.Component {
   // render() {
      let events = googleNiceData.map(tidyEventItem);
      let includeCategories = props.filter ? props.filter : [];

      events = events.filter((event) => {
         return _.includes(includeCategories, event.category)
      });
      events = _.sortBy(events, 'timeslot.start', (a, b) => { return a-b; })

      let eventComponents = events.map((event, index) => {
         return eventBox(index, event.title, event.blurb, event.location, 
            event.display.startTime, event.display.endTime,
            event.category);
      });
      return (
         <section className="main-content section events">
            <div className="container events events-time-filter">
               <label>
                  <span>What&apos;s on? </span>
                  <select>
                     <option value="all">Show all</option>
                     <option value="now">now</option>
                     <option value="4">12-4 pm</option>
                     <option value="5">4-5 pm</option>
                     <option value="6">5-6 pm</option>
                     <option value="7">6-7 pm</option>
                     <option value="8">7-8 pm</option>
                     <option value="9">8-10 pm</option>
                  </select>
               </label>
            </div>
            <div className="columns is-multiline">
               { eventComponents } 
            </div>
         </section>
      )
   // }
}
