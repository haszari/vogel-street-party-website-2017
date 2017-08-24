import React from 'react'

import katharticus from '../../assets/images/photos/VSP2016-Katharticus-PaulAllen.jpg'
import skipper from '../../assets/images/photos/VSP2016-SkipperSinger-RewaPene.jpg'
import tahu from '../../assets/images/photos/VSP2016-TahuTakahes-DavidXie.jpg'


export default class Contact extends React.Component {
   render() {
      return (
         <div className="contact background"> 
            <section className="main-content">
               <div className="container has-text-centered">
                  <div className="content">
                     <h1>Expressions of Interest</h1>
                     <div>
                        <p><b><a href="https://goo.gl/forms/uoh37DYwzsPe7AKW2">Click here</a></b> 
                        and let us know how you&apos;d like to get involved!</p>
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
