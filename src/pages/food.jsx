import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../components/event-guide.jsx'

export default class OpenBusinesses extends React.Component {
   render() {
      let showDropdown = false;
      return (
         <div className="food background"> 
            <section className="main-content intro">
               <div className="container">
                  <div className="content intro">
                     <h1 className="title">Open Businesses & Food Vendors</h1>
                     <div>
                        <p>Have a drink, a bite to eat, or explore.</p>
                     </div>
                  </div>
               </div>
            </section>
            <EventGuide filter="6" timeDropdown={showDropdown}/>
         </div> 
      )
   }
}
