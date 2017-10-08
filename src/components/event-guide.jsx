import _ from 'lodash'

import React from 'react'

import momentLib from 'moment'
import { extendMoment } from 'moment-range';
// extend moment with moment.range
const moment = extendMoment(momentLib);

// import eventData from '../../data/events'

import googleEventData from '../data/20171006-vsp-event-data';

let googleNiceData = googleEventData.feed.entry.map((item) => {
   return {
      title: item['gsx$title']['$t'],
      blurb: item['gsx$blurb']['$t'],
      start: item['gsx$start']['$t'],
      end: item['gsx$end']['$t'],
      // allDay: item['gsx$allday']['$t'],
      location: item['gsx$location']['$t'],
      category: item['gsx$category']['$t'],
      latitude: item['gsx$latitudeid']['$t'],
      longitude: item['gsx$longitudeid']['$t'],
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

   event.locationUrl = '';
   if (event.latitude && event.longitude)
      event.locationUrl = `https://www.google.com/maps/search/?api=1&query=${event.latitude},${event.longitude}`;

   return event;
}

const eventIconsMap = {
   1: "building",
   2: "music",
   3: "installation",
   4: "performance",
   5: "activity",
   6: "food",
   7: "business",
};
const eventIcons = {
   music: (
      <div className="event event-icon">
         <div>
            <span className="fa fa-music"></span>
            <div className="event-icon-title">Music</div>
         </div>
      </div>
   ),
   building: (
      <div className="event event-icon">
         <div>
            <span className="fa fa-bank"></span>
            <div className="event-icon-title">Open Building</div>
         </div>
      </div>
   ),
   installation: (
      <div className="event event-icon">
         <div>
            <span className="fa fa-spinner"></span>
            <div className="event-icon-title">Installation</div>
         </div>
      </div>
   ),
   performance: (
      <div className="event event-icon">
         <div>
            <span className="fa fa-child"></span>
            <div className="event-icon-title">Performance</div>
         </div>
      </div>
   ),
   activity: (
      <div className="event event-icon">
         <div>
            <span className="fa fa-gamepad"></span>
            <div className="event-icon-title">Activity</div>
         </div>
      </div>
   ),
   food: (
      <div className="event event-icon">
         <div>
            <span className="fa fa-cutlery"></span>
            <div className="event-icon-title">Food</div>
         </div>
      </div>
   ),
};


const eventBox = function(key, event) {
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

   if (event.userSuppliedTime.start) {
      let startTimeString = event.timeslot.start.format(displayFormat);
      let endTimeString = event.timeslot.end.format(displayFormat);
      let endInfo = '';
      if (event.userSuppliedTime.end)
         endInfo = (<span> {emdash} <span className="timeslot-end">{endTimeString}</span></span>);
      timeInfo = (
         <span className="event-timeslot">
            <span className="timeslot-start">{startTimeString}</span>{endInfo}
         </span>
      );
   }

   let icon = eventIcons[eventIconsMap[event.category]];

   // we're not using blurb right now
   // let blurb = (
   //    <div>
   //       {event.blurb}
   //    </div>
   // );

   let locationInfo = '';
   if (event.locationUrl){
      locationInfo = (
         <a href={event.locationUrl}>
            <span className="fa fa-map-marker"></span>
            <span className="">{event.location}</span>
         </a>
      );
   }
   else 
      locationInfo = event.location;


   return (
      <div key={key} className="column is-4">
         <div className={classes}>
            <h1 className="title event-title">{event.title}</h1> 
            <div className="columns is-mobile event-details">
               <div className="event-location-time column">
                  {locationInfo} {timeInfo}
               </div>
               { icon } 
            </div>
         </div>
      </div>
   );
}

export default class EventGuide extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         filterTimeRange: this.filterRangeFromValue('all')
      }
      this.onTimeFilter = this.onTimeFilter.bind(this);
   }

   filterRangeFromValue(value) {
      // default to 'all'
      let now = moment();
      let timeFilterRange = moment.range(
         moment("12", 'HH'),
         moment("22", 'HH')
      );
      switch (value) {
         case 'now':
            timeFilterRange = moment.range(
               now.subtract(30, 'minutes'),
               now.add(30, 'minutes')
            );
            break;
         case '4':
            timeFilterRange = moment.range(
               moment("12", 'HH'),
               moment("16", 'HH')
            );
            break;
         case '5':
            timeFilterRange = moment.range(
               moment("16", 'HH'),
               moment("17", 'HH')
            );
            break;
         case '6':
            timeFilterRange = moment.range(
               moment("17", 'HH'),
               moment("18", 'HH')
            );
            break;
         case '7':
            timeFilterRange = moment.range(
               moment("18", 'HH'),
               moment("19", 'HH')
            );
            break;
         case '8':
            timeFilterRange = moment.range(
               moment("19", 'HH'),
               moment("20", 'HH')
            );
            break;
         case '10':
            timeFilterRange = moment.range(
               moment("20", 'HH'),
               moment("22", 'HH')
            );
            break;
         // case 'all':
         // default:
         //    break;
      }
      return timeFilterRange;
   }

   onTimeFilter(domEvent) {
      this.setState({
         filterTimeRange: this.filterRangeFromValue(domEvent.target.value)
      });
   }

   render() {
      let events = googleNiceData.map(tidyEventItem); 

      // filter out dud events with empty title
      events = _.filter(events, (event) => { return event.title });

      let includeCategories = this.props.filter ? this.props.filter : [];
      let showTimeRange = this.state.filterTimeRange;

      events = events.filter((event) => {
         return _.includes(includeCategories, event.category)
      });
      events = events.filter((event) => {
         let overlaps = showTimeRange.overlaps(event.timeslot),
            contains = showTimeRange.contains(event.timeslot),
            isContained = event.timeslot.contains(showTimeRange);
         // console.log(event.title, o, c, C, event.timeslot.toString(), showTimeRange.toString());
         return (overlaps || contains || isContained);
      });
      events = _.sortBy(events, 'timeslot.start', (a, b) => { return a-b; })

      let eventComponents = events.map((event, index) => {
         return eventBox(index, event);
      });

      let timeDropdown = (this.props.timeDropdown == false) ? undefined : (
         <div className="container events events-time-filter">
            <label>
               <span>What&apos;s on? </span>
               <select onChange={this.onTimeFilter}>
                  <option value="all">Show all</option>
                  <option value="now">now</option>
                  <option value="4">12-4 pm</option>
                  <option value="5">4-5 pm</option>
                  <option value="6">5-6 pm</option>
                  <option value="7">6-7 pm</option>
                  <option value="8">7-8 pm</option>
                  <option value="10">8-10 pm</option>
               </select>
            </label>
         </div>
      );

      return (
            <section className="main-content events">
               <div className="container">
                  { timeDropdown }
                  <div className="columns is-centered is-multiline">
                     { eventComponents } 
                  </div>
               </div>
            </section>
      )
   }
}
