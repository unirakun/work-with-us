import { ApolloServer } from 'apollo-server-koa'
import makeContext from './makeContext'
import schema from './schema'

module.exports = (app) => {
  const server = new ApolloServer({
    schema: schema(),
    context: makeContext(),
  })

  server.applyMiddleware({ app })
  return server
}
