import React from 'react'

export default class Template extends React.Component {
   render() {
      return (
         <div id='outlet' className="container">
            {this.props.children}
         </div>
      )
   }
}
