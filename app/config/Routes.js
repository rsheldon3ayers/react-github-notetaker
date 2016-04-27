import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import { Router, Route, IndexRoute } from 'react-router'



module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
  )
