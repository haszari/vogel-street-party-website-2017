import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../../components/event-guide.jsx'

export default class Home extends React.Component {
   render() {
      let categories = ['building', 'performance', 'installation', 'activity'];
      return (
         <div> 
            { introSection }
            <EventGuide filter={categories} />
         </div> 
      )
   }
}
