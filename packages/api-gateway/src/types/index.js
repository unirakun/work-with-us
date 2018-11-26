const { gql } = require('apollo-server')
const cv = require('./cv')
const auth = require('./auth')
const contact = require('./contact')
const proposal = require('./proposal')
const user = require('./user')

module.exports = gql`
  ${cv}

  ${auth}

  ${contact}
  ${proposal}


  ${user}

  type Query {
    proposals: [Proposal]
    cvs(name: String): [CV]!
    users: [User]
  }

  type Mutation {
    addProposal(input: InputProposal!): Boolean
  }
`
