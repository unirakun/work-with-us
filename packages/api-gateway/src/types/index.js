const { gql } = require('apollo-server')
const contact = require('./contact')
const proposal = require('./proposal')

module.exports = gql`
  ${contact}
  ${proposal}

  type Query {
    proposals: [Proposal]
  }

  type Mutation {
    addProposal(input: InputProposal!): Boolean
  }
`
