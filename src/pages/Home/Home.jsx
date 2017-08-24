import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../../components/event-guide.jsx'

const introSection = (
   <section className="main-content intro">
      <div className="container">
         <div className="content intro">
            <h1 className="title">Vogel Street Party 2017</h1>
            <div>
               <p>On <b>14 October 2017</b>, Vogel Street in the Warehouse Precinct will  
               transform into a family-friendly pedestrian space showcasing Dunedin’s 
               talented creative communities. This year&apos;s theme is all about <b>IDEAS &amp; INCUBATION</b>. </p>

               <p>We invite you to participate and enjoy the many 
               and varied interactive activities, exhibitions, performances and installations. 
               Don&apos;t miss your opportunity to connect with the historical precinct, a
               gateway linking the globe with Dunedin.</p>

               <p>The core ethos of the <i>Vogel Street Party</i> is to create a collaborative 
               environment in which a mix of different businesses, industries, community groups, 
               residents, creatives, artists (local and international) interact with an 
               audience to celebrate and highlight the area’s unique past, present and future 
               through a variety of art and technology.</p>
            </div>
         </div>
      </div>
   </section>
);


export default class Home extends React.Component {
   render() {
      let categories = ['building', 'performance', 'installation', 'activity'];
      return (
         <div className="home background"> 
         <div className='container'> 
            { introSection }
            <EventGuide filter={categories} />
         </div> 
         </div> 
      )
   }
}
