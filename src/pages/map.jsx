
import React from 'react'

import aerialImage from '../assets/images/vogel-street-aerial.jpg'

export default function Map() {
   return (
      <div className="background map"> 
         <section className="main-content map">
            <div className="container">
               <div className="content map">
                  <img src={aerialImage} alt="Vogel Street Party Map"></img>
               </div>
            </div>
         </section>
      </div>
   )
}
