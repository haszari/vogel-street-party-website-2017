import React from 'react'

import katharticus from '../../assets/images/photos/VSP2016-Katharticus-PaulAllen.jpg'
import skipper from '../../assets/images/photos/VSP2016-SkipperSinger-RewaPene.jpg'
import tahu from '../../assets/images/photos/VSP2016-TahuTakahes-DavidXie.jpg'

import foodVendorsPdf from '../../assets/pdf/VSP2017-FoodVendorsApplication.pdf'

export default class Contact extends React.Component {
   render() {
      return (
         <div className="contact background"> 
            <section className="main-content">
               <div className="container has-text-centered">
                  <div className="content">
                     <h1>Bands, Performers, DJs &amp; Musicians</h1>
                     <div>
                        <p><b><a href="https://docs.google.com/forms/d/1cCBcdKT2V2WgCKT2gaaVovIEsM6LcxEBcHgonbM7wss/edit">Click here</a></b> to register your interest in performing.</p>
                     </div>
                     <h1>Associated Events</h1>
                     <div>
                        <p>Complete <b><a href="https://docs.google.com/forms/d/1T9A8M8PIED4gwMk3DGPKigc1Jf2wdkUdRR3r34oZ8eE">this form</a></b> if you&apos;d like to run an event or activity.</p>
                     </div>
                     <h1>Food Vendors</h1>
                     <div>
                        <p>Download <b><a href={foodVendorsPdf}>this form</a></b> to register your interest in selling food at the event.</p>
                     </div>
                     <h1>Expressions of Interest</h1>
                     <div>
                        <p>If you would like to contribute in another way, <b><a href="https://goo.gl/forms/uoh37DYwzsPe7AKW2">click here</a></b> and let us know how you&apos;d like to get involved!</p>
                     </div>
                  </div>
                  <div className="columns">
                     <div className="column is-4">
                        <img src={katharticus} alt="Katharticus photography: Paul Allen"></img>
                     </div>
                     <div className="column is-4">
                        <img src={skipper} alt="photography: Rewa Pene"></img>
                     </div>
                     <div className="column is-4">
                        <img src={tahu} alt="Tahu &amp; the Takahes photography: David Xie"></img>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      )
   }
}
