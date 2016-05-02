'use strict'
import React from 'react'

const Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
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
