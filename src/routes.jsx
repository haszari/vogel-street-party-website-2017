import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Music from './pages/music.jsx'
import Food from './pages/food.jsx'

module.exports = (
   <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/music' component={Music}/>
      <Route path='/food' component={Food}/>
      <Route path='/sponsors' component={Contact}/>
      <Route path='/contact' component={Contact}/>
   </Route>
)
