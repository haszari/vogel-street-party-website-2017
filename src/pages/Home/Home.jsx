import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../../components/event-guide.jsx'

const introSection = (
   <section className="main-content section intro">
      <div className="container">
         <div className="content intro">
            <h1 className="title">Vogel Street Party 2017</h1>
            <div>
               <p>This year the party is all about <b>Ideas and Incubation</b>.</p>
               <p>Saturday the 14th October, Vogel Street, Dunedin</p>
               <p>Free &amp; all-ages! Check out the events and activities on offer.</p>
            </div>
         </div>
      </div>
   </section>
);


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
