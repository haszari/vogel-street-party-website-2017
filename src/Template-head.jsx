import React from 'react'

import appleTouchIcon from './assets/logo-root/apple-touch-icon.png'
import favicon32 from './assets/logo-root/favicon-32x32.png'
import favicon16 from './assets/logo-root/favicon-16x16.png'

import manifest from './assets/logo-root/manifest.json'

export default class Template extends React.Component {
   render() {
      return (
         <head>
         <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;"/>
            <link rel="stylesheet" href="/styles.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link href="https://fonts.googleapis.com/css?family=Muli|Lato" rel="stylesheet"/>          
            <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
            <link rel="manifest" href={manifest}/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="apple-mobile-web-app-title" content="Vogel Street Party"/>
            <meta name="application-name" content="Vogel Street Party"/>
            <meta name="theme-color" content="#ffffff"/>
         </head>
      )
   }
}
