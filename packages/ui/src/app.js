import React, { Fragment } from 'react'
// import Proposals from './proposals'
// import AddNewProposal from './addNewProposal'
import { cv } from '@work-with-us/data'
import CV from './cv'

const App = () => (
  // <div>
  //   <h1>Proposals</h1>
  //   <Proposals />
  //   <AddNewProposal />
  // </div>
  <Fragment>
    {cv.map(data => <CV key={data.who.name} {...data} />)}
  </Fragment>
)

export default App
