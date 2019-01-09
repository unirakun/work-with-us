import { gql } from 'apollo-server'
import cv from './cv'
import directives from './directives'
import contact from './contact'
import user from './user'

export default gql`
  ${cv}

  ${directives}

  ${contact}

  ${user}

  type Query {
    cvs(name: String): [CV]!
    users: [User] @auth(requires: ADMIN) @api(name: "users")
  }
`
