import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../components/event-guide.jsx'

export default class Music extends React.Component {
   render() {
      return (
         <div className="music background"> 
            <section className="main-content has-text-centered">
               <div className="container">
                  <div className="content">
                     <h1 className="title">Music</h1>
                     <div>
                        <p>Experience the evolving Dunedin Sound.</p>
                     </div>
                  </div>
               </div>
            </section>
            <EventGuide filter="2" />
         </div> 
      )
   }
}
