
import React from 'react'

import sponsorData from '../data/sponsors'

let sponsorBox = function(key, sponsorInfo) {
   let classes = "column sponsor-" + sponsorInfo.level;
   if (sponsorInfo.level == 'grant') {
      classes += ' is-4';
   }
   else if (sponsorInfo.level == 'gold') {
      classes += ' is-4';
   }
   else if (sponsorInfo.level == 'silver') {
      classes += ' is-3';
   }
   else if (sponsorInfo.level == 'local') {
      classes += ' is-2';
   }
   let image = require(`../assets/images/sponsors/${sponsorInfo.image}`);
   // let title = (<h1 className="title event-title">{sponsorInfo.name}</h1>);

   return (
      <div key={key} className={classes}>
         <div>
            <img src={image} alt={sponsorInfo.name}></img>
         </div>
      </div>
   );
}

let getSponsors = function(level) {
   let filtered = sponsorData.filter(item => { 
      return (item.level == level);
   })
   return filtered.map((item, index) => {
      return sponsorBox(index, item);
   });
}

export default function Sponsors() {
   let grants = getSponsors('grant');
   let gold = getSponsors('gold');
   let silver = getSponsors('silver');
   let local = getSponsors('local');
   return (
      <div className="sponsors background"> 
         <section className="main-content">
            <div className="container has-text-centered">
               <h1>Grants</h1>
               <div className="columns is-centered is-multiline">
                  { grants }
               </div>
               <h1>Gold Sponsors</h1>
               <div className="columns is-centered is-multiline">
                  { gold }
               </div>
               <h1>Silver Sponsors</h1>
               <div className="columns is-centered is-multiline">
                  { silver }
               </div>
               <h1>Local Sponsors</h1>
               <div className="columns is-centered is-multiline">
                  { local }
               </div>
            </div>
         </section>
      </div>
   )
}
