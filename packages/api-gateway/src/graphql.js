const { ApolloServer } = require('apollo-server-koa')
const typeDefs = require('./types')

const proposals = [
]

const resolvers = {
  Query: {
    proposals: () => proposals,
  },
  Mutation: {
    addProposal: (root, { input }) => {
      proposals.push(input)
      return true
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

module.exports = app => {
  server.applyMiddleware({ app })
  return server
}
