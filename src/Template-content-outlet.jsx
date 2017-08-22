import React from 'react'

export default class Template extends React.Component {
   render() {
      return (
         <div id='outlet' className="">
            {this.props.children}
         </div>
      )
   }
}
