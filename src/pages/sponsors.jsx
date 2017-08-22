
import React from 'react'

import sponsorData from '../data/sponsors'

const sponsorBox = function(key, sponsorInfo) {
   let classes = "sponsor-" + sponsorInfo.level;
   return (
      <div key={key} className="column is-4">
         <div className={classes}>
            <h1 className="title event-title">{sponsorInfo.name}</h1>
         </div>
      </div>
   );
}
export default function Sponsors() {
   let sponsorLogos = sponsorData.map((item, index) => {
      console.log({index, item});
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
