import React from 'react'

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

const eventSection = function(title, copy) {
   return (
      <section className="main-content section">
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
      let events = [
         eventSection('Bands', 'There will be music on lots of stages.'),
         eventSection('Food', 'All the vendors chomp chomp.'),
      ];
      return (
         <div> 
         { introSection }
         { events } 
         </div> 
      )
   }
}
