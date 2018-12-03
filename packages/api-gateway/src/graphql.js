import { ApolloServer } from 'apollo-server-koa'
import makeContext from './makeContext'
import schema from './schema'

export default (app) => {
  const server = new ApolloServer({
    schema: schema(),
    context: makeContext(),
  })

  server.applyMiddleware({ app })
  return server
}
