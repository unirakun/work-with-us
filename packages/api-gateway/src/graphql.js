import { ApolloServer } from 'apollo-server-koa'
import jwt from 'jsonwebtoken'
import makeUsers from '@work-with-us/api-users'
import makeProposals from '@work-with-us/api-proposals'
import logger from '@work-with-us/logger'
import schema from './schema'

const { JWT_SECRET } = process.env
if (!JWT_SECRET) throw new Error('JWT_SECRET must be set')

// TODO: use promisify
const getPayload = token => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      reject(err)
      return
    }

    resolve(payload)
  })
})

// TODO: move this into "auth" ?
const getRole = async ({ ctx }) => {
  const { authorization } = ctx.request.headers
  if (!authorization) return 'VIEWER'

  try {
    const { role } = await getPayload(authorization.replace('Bearer ', ''))
    return role
  } catch (ex) {
    logger.error('error while reading jwt', JSON.stringify(ex, null, 2))
    logger.info('request is processed as VIEWER')
    return 'VIEWER'
  }
}

const context = models => async (config) => {
  const role = await getRole(config)

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
