'use strict'
import React from 'react'
import { Router } from 'react-router'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes from './Notes/Notes'

const Profile = React.createClass({
  getInitialState: function(){
    return {
      notes: [1,2,3],
      bio: {
        name: 'John Wayne'
      },
      repos: ['a', 'b', 'c']
    }
  },
  render: function(){

    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className='col-md-4'>
          <Repos repos={this.state.repos}/>
        </div>
        <div className='col-md-4'>
          <Notes notes={this.state.notes}/>
        </div>
      </div>
      )
  }
})

export default Profile

