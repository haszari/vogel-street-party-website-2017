import './style/app.scss'

import React from 'react'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
