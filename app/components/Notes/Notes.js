'use strict'
import React from 'react'

const Notes = React.createClass({
  render: function(){
    return (
       <div>
        <p> Notes </p>
        <p> NOTES: {this.props.notes} </p>

      </div>
      )
  }
});

export default Notes
