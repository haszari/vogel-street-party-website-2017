import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../components/event-guide.jsx'

export default class Music extends React.Component {
   render() {
      return (
         <div> 
            <EventGuide filter="music" />
         </div> 
      )
   }
}
