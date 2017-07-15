import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <div>
            <IndexLink to="/">Home</IndexLink>
            <Link to="/contact">Contact</Link>
          </div>
          <div >Site by Radness Tech 2016</div>
        </div>
      </footer>
    )
  }
}
