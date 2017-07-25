import React from 'react'
import eventData from '../../data/events'

const introSection = (
   <section className="main-content section">
      <div className="container">
         <div className="content">
            <h1 className="title">Vogel Street Party</h1>
            <div>
               <p>This year the party is all about <b>Ideas and Incubation</b>.</p>
            </div>
         </div>
      </div>
   </section>
);

const eventSection = function(key, title, copy) {
   return (
      <section key={key} className="main-content section">
         <div className="container">
            <div className="content">
               <h1 className="title">{title}</h1>
               <div>
                  {copy}
               </div>
            </div>
         </div>
      </section>
   );
}

export default class Home extends React.Component {
   render() {
      let events = eventData.map((event, index) => {
         return eventSection(index, event.title, event.blurb);
      });
      return (
         <div> 
         { introSection }
         { events } 
         </div> 
      )
   }
}
