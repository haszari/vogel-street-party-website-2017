import _ from 'lodash'

import React from 'react'

import momentLib from 'moment'
import { extendMoment } from 'moment-range';
// extend moment with moment.range
const moment = extendMoment(momentLib);

// import eventData from '../../data/events'

import googleEventData from '../data/20170730-testdata'

let googleNiceData = googleEventData.feed.entry.map((item) => {
   return {
      title: item['gsx$title']['$t'],
      blurb: item['gsx$blurb']['$t'],
      start: item['gsx$start']['$t'],
      end: item['gsx$end']['$t'],
      // allDay: item['gsx$allday']['$t'],
      location: item['gsx$location']['$t'],
      category: item['gsx$category']['$t'],
   }
});

let tidyEventItem = (options) => {
   let event = options;
   event.userSuppliedTime = {
      start: false,
      end: false,
   }

   // default times
   // 12 midday, not next day!
   let startTime = moment("12", "HH");
   let endTime = moment("23", "HH");

   // if (event.allDay) {
   //    event.display.startTime = 'all day';
   // }

   // carefully override time with user supplied info
   let dataFormat = 'h:mm p';
   let rawTimeslot = {
      start: moment(options.start, dataFormat),
      end: moment(options.end, dataFormat)
   };
   if (rawTimeslot.start.isValid()) {
      event.userSuppliedTime.start = true;
      startTime = rawTimeslot.start;
   }
   if (rawTimeslot.end.isValid()) {
      event.userSuppliedTime.end = true;
      console.log(event.title, event.end, options.end, rawTimeslot.end)
      endTime = rawTimeslot.end;
   }

   // force times to be in the afternoon (i.e. 12-24 oclock)
   if ((startTime.hour() < 12)) {
      startTime = startTime.add(12, 'hours');
   }
   if ((endTime.hour() < 12)) {
      endTime = endTime.add(12, 'hours');
   }

   event.timeslot = moment.range(startTime, endTime);
   // console.log(event.title, event.timeslot.toString(), event);
   // console.log('--------------------------')

   return event;
}

const eventBox = function(key, event) {
// title, copy, location, startTime, endTime, category

   let dataFormat = 'h:mm p';
   let displayFormat = 'h:mm';
   let timeInfo = '';
   let emdash = '\u2014';
   let classes = "box event";
   classes += " " + event.category;

   if (event.location == "Vogel Stage")
      classes += " " + 'vogel-stage';
   if (event.location == "Queens Gardens Stage")
      classes += " " + 'queens-stage';

      // event.display.startTime = rawTimeslot.start.format(displayFormat);

   if (event.userSuppliedTime.start) {
      let startTimeString = event.timeslot.start.format(displayFormat);
      let endTimeString = event.timeslot.end.format(displayFormat);
      let endInfo = '';
      if (event.userSuppliedTime.end)
         endInfo = (<span> {emdash} <span className="timeslot-end">{endTimeString}</span></span>);
      timeInfo = (
         <div className="event-timeslot column">
            <span className="timeslot-start">{startTimeString}</span>{endInfo}
         </div>
      );
   }

   // we're not using blurb right now
   // let blurb = (
   //    <div>
   //       {event.blurb}
   //    </div>
   // );

   return (
      <div key={key} className="column is-4">
         <div className={classes}>
            <h1 className="title event-title">{event.title}</h1>
            <div className="columns event-details">
               <div className="event-location column">
                  {event.location}
               </div>
               {timeInfo}
            </div>
         </div>
      </div>
   );
}

export default class EventGuide extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         filter: {
            timeRange: moment.range(
               moment("17", 'HH'),
               moment("20", 'HH')
            )
         }
      }
      console.log(this.state.filter.timeRange.toString());
   }

   render() {
      let events = googleNiceData.map(tidyEventItem); 
      let includeCategories = this.props.filter ? this.props.filter : [];
      let showTimeRange = this.state.filter.timeRange;

      events = events.filter((event) => {
         return _.includes(includeCategories, event.category)
      });
      events = events.filter((event) => {
         // console.log(event.title, event.timeslot.toString(), showTimeRange.toString());
         return (
            showTimeRange.overlaps(event.timeslot) //|| 
            // showTimeRange.intersect(event.timeslot.range) ||
            // showTimeRange.contains(event.timeslot.range) ||
            // event.timeslot.range.contains(showTimeRange)
         ); 
      });
      events = _.sortBy(events, 'timeslot.start', (a, b) => { return a-b; })

      let eventComponents = events.map((event, index) => {
         return eventBox(index, event);
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
   }
}
