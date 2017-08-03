import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../components/event-guide.jsx'

export default class Food extends React.Component {
   render() {
      let showDropdown = false;
      return (
         <div> 
            <EventGuide filter="food" timeDropdown={showDropdown}/>
         </div> 
      )
   }
}
