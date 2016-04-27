'use strict'
import React from 'react'

const Repos = React.createClass({
  render: function(){
    return (
      <div>
        <p>Repos</p>
        <p> REPOS: {this.props.repos} </p>
       </div>
      )
  }
});

export default Repos
