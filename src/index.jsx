import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router'
import TemplateHead from './Template-head.jsx'
import TemplateContentOutlet from './Template-content-outlet.jsx'
import Routes from './routes.jsx'

var offlinePlugin = require('offline-plugin/runtime');
let htmlOpener = '<html>';
if (process.env.NODE_ENV == 'production') {   
   if (window && typeof window != 'undefined' && window.navigator)
      offlinePlugin.install();
   htmlOpener = '<html manifest="appcache/manifest.appcache">';
}

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
      // dev temporary ID
      let gaPropertyId  = 'UA-102630529-1';
      // production ID
      if (process.env.NODE_ENV == 'production')
         gaPropertyId  = 'UA-102630529-2';   


      // insert the google tracking code manually here so react doesn't sanitise it
      // ugly trick – would be good to find a better technique
      var preamble = htmlOpener + ReactDOMServer.renderToString(
         <TemplateHead>
         </TemplateHead>
      ) + '<body>';
      var bundledScript = '<script src="/bundle.js"></script>';
      var tracking = `<script>\
         (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){\
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\
         })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");\
         ga("create", "${gaPropertyId}", "auto");\
         ga("send", "pageview");\
         </script>`;
      var postamble = `</body>\
         ${bundledScript}\
         ${tracking}\
         </html>`;
      var html = preamble + ReactDOMServer.renderToString(
            <TemplateContentOutlet>
               <RouterContext {...renderProps} />
            </TemplateContentOutlet>
      ) + postamble;
      callback(null, html)
   })
}
