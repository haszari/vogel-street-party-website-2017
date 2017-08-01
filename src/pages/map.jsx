
import React from 'react'

import aerialImage from '../assets/images/vogel-street-aerial.jpg'

export default function Map() {
   return (
      <section className="main-content section map">
         <div className="container">
            <div className="content map">
               <img src={aerialImage} alt="Vogel Street Party Map"></img>
            </div>
         </div>
      </section>
   )
}
