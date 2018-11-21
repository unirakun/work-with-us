import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Proposals from './proposals.container'
import AddNewProposal from './addNewProposal'

const ProposalScreen = ({ className }) => (
  <div className={className}>
    <div className="links">
      CV :
      <NavLink to="/fabien">Fabien</NavLink>
      <NavLink to="/guillaume">Guillaume</NavLink>
    </div>
    <Proposals />
    <AddNewProposal />
  </div>
)

export default styled(ProposalScreen)`
  & > .links {
    padding: 2em;

    & > a {
      margin: 1em;
    }
  }
`
