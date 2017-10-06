import React from 'react'
import {Link, IndexLink} from 'react-router'

import logoImage from '../../assets/images/20170620-vogelstreetparty-2017-logo-crop.png'
import headerImage from '../../assets/images/header-banner-transparent-2000.png'
import goodGoodLogoImage from '../../assets/images/sponsors/GoodGood.png';


export default class Header extends React.Component {
   render() {
      let sponsorLogoImageStyle = {
         height: '60px',
         verticalAlign: 'middle',
      };
      let headerImageStyle = {
         height: '100%',
      };

      // just you wait!
      let music = (
         <li>
            <Link className="" to="/music">
               Music
            </Link>
         </li>
      );
      let food = (
         <li>
            <Link className="" to="/food">
               Food
            </Link>
         </li>
      );
      let map = (
         <li>
            <Link className="" to="/map">
               Map
            </Link>
         </li>
      );
      let spacer = ( <li></li> );
      let contact = (
         <li>
            <Link className="" to="/contact">
               Contact
            </Link>
         </li>
      );

      return (
         <div>
            <div className="header-bigImage-wrapper is-fullwidth">
               <div className="header-namingSponsor is-fullwidth">
                  <a href="https://www.goodgood.co.nz/"><img src={goodGoodLogoImage} style={sponsorLogoImageStyle} alt="Good Good"></img> proudly presents</a>
               </div>
               <div className="header-bigImage is-fullwidth">
                  <Link className="" to="/">
                     <img src={headerImage} style={headerImageStyle} alt="Ideas &amp; Incubation"></img>
                  </Link>
               </div>
               <div className="header-title is-fullwidth">
                  Vogel Street Party
               </div>
               <div className="header-date is-fullwidth">
                  14 Oct 2017
               </div>
            </div>

            <div className="header">
               <div className="container">
               <div className="header-menu tabs is-fullwidth">
                  <ul>
                     <li>
                        <Link className="" to="/">
                           Home
                        </Link>
                     </li>
                     { music }
                     { food }
                     <li>
                        <Link className="" to="/sponsors">
                           Sponsors
                        </Link>
                     </li>
                  </ul>
               </div>
               </div>
            </div>
         </div>
      )
   }
}
