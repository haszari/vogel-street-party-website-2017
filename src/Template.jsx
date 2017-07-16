import React from 'react'

export default class Template extends React.Component {
  render() {
    return(
      <html>
        <head>
          <link rel="stylesheet" href="/styles.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet"/>
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
