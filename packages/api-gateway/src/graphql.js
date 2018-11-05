const { ApolloServer } = require('apollo-server-koa')
const { cv } = require('@work-with-us/data')
const typeDefs = require('./types')

const proposals = [
]

const resolvers = {
  Query: {
    proposals: () => proposals,
    cvs: (root, { name }) => {
      if (!name) return Object.values(cv)
      console.log(cv[name])
      return [cv[name]]
    },
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
