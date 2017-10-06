import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Music from './pages/music.jsx'
import Food from './pages/food.jsx'
// import Map from './pages/map.jsx'
import Sponsors from './pages/sponsors.jsx'

      // <Route path='/music' component={Music}/>
      // <Route path='/food' component={Food}/>
      // <Route path='/map' component={Map}/>

module.exports = (
   <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/sponsors' component={Sponsors}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/food' component={Food}/>
      <Route path='/music' component={Music}/>
   </Route>
)
