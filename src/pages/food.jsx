import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../components/event-guide.jsx'

export default class Food extends React.Component {
   render() {
      let showDropdown = false;
      return (
         <div>
            <section className="main-content section intro">
               <div className="container">
                  <div className="content intro">
                     <h1 className="title">Vogel Street Party 2017 – Food</h1>
                     <div>
                        <p>All of your favourite food vendors will be parked up and serving a range of delicious options. Yum!</p>
                     </div>
                  </div>
               </div>
            </section>
            <EventGuide filter="food" timeDropdown={showDropdown}/>
         </div> 
      )
   }
}
