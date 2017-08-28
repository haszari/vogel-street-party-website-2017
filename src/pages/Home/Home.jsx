import _ from 'lodash'

import React from 'react'
import moment from 'moment'

import EventGuide from '../../components/event-guide.jsx'

import crowdHugs from '../../assets/images/photos/VSP 2016 By Rewa Pene-86.jpg'
import stringArt from '../../assets/images/photos/VSP 2016 By Rewa Pene-81.jpg'
import buildingTour from '../../assets/images/photos/VSP 2016 By Rewa Pene-3.jpg'


const introSection = (
   <section className="main-content intro">
      <div className="container">
         <div className="content intro">
            <div className="columns columns-introBlurb">
               <div className="column is-6" style={{ fontSize: '120%' }}>
                  <p>On <b>14 October 2017</b>, Vogel Street in the Warehouse Precinct will  
                  transform into a family-friendly pedestrian space showcasing Dunedin’s 
                  talented creative communities. </p>
                  <p>The theme this year is <b>IDEAS &amp; INCUBATION</b>.</p>
               </div>
               <div className="column is-6">
                  <img src={crowdHugs} alt="Come one, come all to the Vogel Street Party! photography: Rewa Pene"></img>
               </div>
            </div>
            <div className="columns columns-introBlurb">
               <div className="column is-5">
                  <img src={stringArt} alt="Ideas AND Incubation! photography: Rewa Pene"></img>
               </div>
               <div className="column is-7">
                  <p>We invite you to participate and enjoy the many 
                  and varied interactive activities, exhibitions, performances and installations. 
                  Don&apos;t miss your opportunity to connect with the historical precinct, a
                  gateway linking the globe with Dunedin.</p>
               </div>
            </div>
            <div className="columns columns-introBlurb">
               <div className="column is-7">
               <p>The core ethos of the <i>Vogel Street Party</i> is to create a collaborative 
               environment in which a mix of different businesses, industries, community groups, 
               residents, creatives, artists (local and international) interact with an 
               audience to celebrate and highlight the area’s unique past, present and future 
               through a variety of art and technology.</p>
               </div>
               <div className="column is-5">
                  <img src={buildingTour} alt="Explore the neighbourhood! photography: Rewa Pene"></img>
               </div>
            </div>
         </div>
      </div>
   </section>
);


export default class Home extends React.Component {
   render() {
      // coming soon!
      // let categories = ['building', 'performance', 'installation', 'activity'];
      // let events = ( <EventGuide filter={categories} /> );
      let eventsComingSoon = (
         <section className="main-content moreInfoComingSoon">
            <div className="container">
               <div className="content moreInfoComingSoon">
                  <h1 className="title">Stay tuned!</h1>
                  <div className="">
                     Check back soon to find out more about what you can see and do at the event this year.
                  </div>
               </div>
            </div>
         </section>
      );

      return (
         <div className="home background"> 
         <div className='container'> 
            { introSection }
            { eventsComingSoon }
         </div> 
         </div> 
      )
   }
}
