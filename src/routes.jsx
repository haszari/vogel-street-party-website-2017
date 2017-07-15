import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/contact' component={Contact}/>
  </Route>
)
