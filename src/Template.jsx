import React from 'react'

export default class Template extends React.Component {
  render() {
    return(
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css"/>
        </head>
        <body>
            <div id='outlet' className="container">
                  {this.props.children}
            </div>
            <script src="/bundle.js"></script>
        </body>
      </html>
    )
  }
}
