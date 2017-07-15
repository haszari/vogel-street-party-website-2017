import React from 'react'
import {Link, IndexLink} from 'react-router'

import logoImage from '../../assets/images/20170620-vogelstreetparty-2017-logo-crop.png'


export default class Header extends React.Component {
   render() {
      let logoImageStyle = {
         height: '25px',
         paddingRight: '8px',
      };

      return (
         <section className="header">
            <div className="tabs is-fullwidth">
               <ul>
                  <li>
                     <Link className="" to="/">
                        <img src={logoImage} style={logoImageStyle} alt="Ideas &amp; Incubation"></img>
                        Vogel Street Party 2017 
                     </Link>
                  </li>
                  <li>
                     <Link className="" to="/contact">
                        Events
                     </Link>
                  </li>
                  <li>
                     <Link className="" to="/contact">
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>
         </section>
      )
   }
}
