const { ApolloServer } = require('apollo-server-koa')
const schema = require('./schema')

const server = new ApolloServer({ schema })

module.exports = (app) => {
  server.applyMiddleware({ app })
  return server
}
