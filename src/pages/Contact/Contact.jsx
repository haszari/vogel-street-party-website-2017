import React from 'react'

import radImg from '../../assets/images/radness.jpg'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact Radness</h1>
        <div>
          <img src={radImg} />
          <p>Come visit radness tech and become one of us.</p>
          <a href="mailto:radnesstech@radnesstech.io">Email: radnesstech@radnesstech.io</a>
        </div>
      </div>
    )
  }
}
