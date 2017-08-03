import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../components/event-guide.jsx'

export default class Music extends React.Component {
   render() {
      return (
         <div> 
            <section className="main-content section intro">
               <div className="container">
                  <div className="content intro">
                     <h1 className="title">Vogel Street Party 2017 – Music</h1>
                     <div>
                        <p>There will be various stages with a range of acts, from folk, rock, reggae, kapa haka, magic, and electronica on show!</p>
                     </div>
                  </div>
               </div>
            </section>
            <EventGuide filter="music" />
         </div> 
      )
   }
}
