import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Proposals from './proposals'
import AddNewProposal from './addNewProposal'
import CV from './cv'

const ProposalScreen = () => (
  <React.Fragment>
    <Proposals />
    <AddNewProposal />
  </React.Fragment>
)

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true // eslint-disable-line no-param-reassign

  return (
    <h1>Oops, nothing here!</h1>
  )
}

const App = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/fabien">Fabien JUIF</NavLink>
      </li>
      <li>
        <NavLink to="/guillaume">Guillaume CRESPEL</NavLink>
      </li>
      <li>
        <NavLink to="/proposals">Proposals</NavLink>
      </li>
    </ul>

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
      <Route path="/proposals" component={ProposalScreen} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
