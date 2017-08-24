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

      // just you wait!
      // let musicAndFood = (
      //    <li>
      //       <Link className="" to="/music">
      //          Music
      //       </Link>
      //    </li>
      //    <li>
      //       <Link className="" to="/food">
      //          Food
      //       </Link>
      //    </li>
      //       <li>
      //          <Link className="" to="/map">
      //             Map
      //          </Link>
      //       </li>
      // );

      return (
         <div>
            <div className="header-bigImage is-fullwidth">
               <div className="header-bigImage-leftBackground"></div>
               <Link className="" to="/">
                  <img src={headerImage} style={headerImageStyle} alt="Ideas &amp; Incubation"></img>
               </Link>
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
               </div>
            </div>
         </div>
      )
   }
}
