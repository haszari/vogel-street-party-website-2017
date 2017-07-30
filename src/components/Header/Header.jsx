import React from 'react'
import {Link, IndexLink} from 'react-router'

import logoImage from '../../assets/images/20170620-vogelstreetparty-2017-logo-crop.png'
import headerImage from '../../assets/images/header-banner.jpg'


export default class Header extends React.Component {
   render() {
      let logoImageStyle = {
         height: '25px',
         paddingRight: '8px',
      };
      let headerImageStyle = {
         height: '100%',
      };

      return (
         <div>
            <div className="header-bigImage is-fullwidth">
               <div className="header-bigImage-leftBackground"></div>
               <Link className="" to="/">
                  <img src={headerImage} style={headerImageStyle} alt="Ideas &amp; Incubation"></img>
               </Link>
            </div>

            <section className="header">
               <div className="header-menu tabs is-fullwidth">
                  <ul>
                     <li>
                        <Link className="" to="/">
                           Events
                        </Link>
                     </li>
                     <li>
                        <Link className="" to="/sponsors">
                           Sponsors
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
         </div>
      )
   }
}
