import makeUsers from '@work-with-us/api-users'
import makeProposals from '@work-with-us/api-proposals'
import { ApolloServer } from 'apollo-server-koa'
import schema from './schema'

// TODO: move this into "auth" ?
const getRole = ({ ctx }) => {
  const { authorization } = ctx.request.headers
  if (!authorization) return 'VIEWER'

  // TODO: check user JWT...

  return 'ADMIN'
}

const context = models => (config) => {
  const role = getRole(config)

  // TODO: pass logger into context
  // so we can inject wich user is connecter and log it by default :)
  return {
    models,
    role,
  }
}

module.exports = (app) => {
  const models = {
    proposals: makeProposals(),
    users: makeUsers(),
  }

  const server = new ApolloServer({
    schema: schema(),
    context: context(models),
  })

  server.applyMiddleware({ app })
  return server
}
