import { gql } from 'apollo-server'
import cv from './cv'
import auth from './auth'
import contact from './contact'
import proposal from './proposal'
import user from './user'

export default gql`
  ${cv}

  ${auth}

  ${contact}
  ${proposal}


  ${user}

  type Query {
    proposals: [Proposal] @auth(requires: ADMIN)
    cvs(name: String): [CV]!
    users: [User] @auth(requires: ADMIN)
  }

  type Mutation {
    addProposal(input: InputProposal!): Boolean
  }
`
