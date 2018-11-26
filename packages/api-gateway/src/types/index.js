const { gql } = require('apollo-server')
const auth = require('./auth')
const contact = require('./contact')
const proposal = require('./proposal')
const cv = require('./cv')

module.exports = gql`
  ${auth}

  ${contact}
  ${proposal}

  ${cv}

  type Query {
    proposals: [Proposal]
    cvs(name: String): [CV]!
  }

  type Mutation {
    addProposal(input: InputProposal!): Boolean
  }
`
