import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './container/home'
import Login from './container/auth/login'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>

    </Switch>
  )
}

export default Routes

