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
                     <h1 className="title">Food & Drink</h1>
                     <div>
                        <p>Have a drink or a bite to eat from Dunedin's finest eateries.</p>
                     </div>
                  </div>
               </div>
            </section>
            <EventGuide filter="6" timeDropdown={showDropdown}/>
         </div> 
      )
   }
}
