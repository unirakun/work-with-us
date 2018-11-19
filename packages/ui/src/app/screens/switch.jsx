import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CV from './cv'
import NotFound from './notfound'
import Proposals from './proposals'

const Screens = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <CV name="fabien" />}
    />
    <Route
      path="/fabien"
      render={() => <CV name="fabien" />}
    />
    <Route
      path="/guillaume"
      render={() => <CV name="guillaume" />}
    />
    <Route path="/proposals" component={Proposals} />
    <Route component={NotFound} />
  </Switch>
)

export default Screens
