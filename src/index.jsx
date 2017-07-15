import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router'
import Template from './Template.jsx'
import Routes from './routes.jsx'

var offlinePlugin = require('offline-plugin/runtime');
if (typeof window != 'undefined' && window.navigator)
  offlinePlugin.install();

/* Client render (optional) */
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('outlet')
  ReactDOM.render(<Router history={browserHistory} routes={Routes} />, outlet)
}

/* Exported static site renderer */
export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  match({
    routes: Routes,
    location: location
  }, function(error, redirectLocation, renderProps) {
    var html = ReactDOMServer.renderToStaticMarkup(
      <Template>
        <RouterContext {...renderProps} />
      </Template>
    );
    callback(null, html)
  })
}
