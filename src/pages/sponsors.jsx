
import React from 'react'

import sponsorData from '../data/sponsors'

const sponsorBox = function(key, sponsorInfo) {
   let classes = "sponsor-" + sponsorInfo.level;
   let image = require(`../assets/images/sponsors/${sponsorInfo.image}`);
   // let title = (<h1 className="title event-title">{sponsorInfo.name}</h1>);

   return (
      <div key={key} className="column is-4">
         <div className={classes} >
            <img src={image} alt={sponsorInfo.name}></img>
         </div>
      </div>
   );
}
export default function Sponsors() {
   let sponsorLogos = sponsorData.map((item, index) => {
      // console.log({index, item});
      return sponsorBox(index, item);
   });

   return (
      <section className="main-content section sponsors">
         <div className="container">
            <div className="content map">
               { sponsorLogos }
            </div>
         </div>
      </section>
   )
}
