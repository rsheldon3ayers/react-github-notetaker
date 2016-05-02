'use strict';
import React from 'react';

let AddNote = React.createClass({

  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  setRef: function(ref){
    this.note = ref;
  },
  handleSubmit: function(){
    let newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote)
  },

  render: function(){
    return(
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Add New Note' ref={this.setRef}/>
          <span className='input-group-btn'>
            <button className='btn btn-default' type='button' onClick={this.handleSubmit}>Submit</button>
          </span>
        </div>
      )
  }

})

export default AddNote
