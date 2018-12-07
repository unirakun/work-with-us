import { gql } from 'apollo-server'
import cv from './cv'
import directives from './directives'
import contact from './contact'
import proposal from './proposal'
import user from './user'

export default gql`
  ${cv}

  ${directives}

  ${contact}
  ${proposal}

  ${user}

  type Query {
    proposals: [Proposal] @auth(requires: ADMIN) @api(name: "proposals")
    cvs(name: String): [CV]!
    users: [User] @auth(requires: ADMIN) @api(name: "users")
  }

  type Mutation {
    addProposal(input: InputProposal!): Boolean @api(name: "proposals")
  }
`
