const { ApolloServer } = require('apollo-server-koa')
const schema = require('./schema')

module.exports = (app) => {
  const server = new ApolloServer({ schema: schema() })

  server.applyMiddleware({ app })
  return server
}
