import React from 'react'
import {Link, IndexLink} from 'react-router'



export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
         <div className="container">
            <div className="content has-text-centered">
               <div className="social-links">
                  <a href="https://www.facebook.com/vogelstreetparty">
                     <span className="icon"><i className="fa fa-facebook"></i></span>
                     <span className="is-hidden-mobile">vogelstreetparty</span>
                  </a>
                  <a href="https://www.instagram.com/vogelstparty/">
                     <span className="icon"><i className="fa fa-instagram"></i></span>
                     <span className="is-hidden-mobile">vogelstparty</span>
                  </a>
                  <a href="https://twitter.com/vogelstparty">
                     <span className="icon"><i className="fa fa-twitter"></i></span>
                     <span className="is-hidden-mobile">vogelstparty</span>
                  </a>
               </div>
            </div>
         </div>
      </footer>
    )
  }
}
