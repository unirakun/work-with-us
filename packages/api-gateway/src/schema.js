import { makeExecutableSchema } from 'graphql-tools'
import { cv } from '@work-with-us/data'
import logger from '@work-with-us/logger'
import typeDefs from './types'

export default () => {
  const resolvers = {
    Query: {
      users: async (parent, args, { role, models }) => {
        // TODO: user schema directive
        if (role !== 'ADMIN') return []

        const users = await models.users.list()
        return users
      },
      proposals: async (parent, args, { role, models }) => {
        // TODO: use schema directive
        if (role !== 'ADMIN') return []

        let res
        try {
          res = await models.proposals.list()
        } catch (ex) {
          logger.error(ex)
          throw ex
        }

        return res
      },
      cvs: (parent, { name }, { role }) => {
        logger.debug('role', role)
        if (!name) return Object.values(cv)

        const otherCode = name === 'fabien' ? 'guillaume' : 'fabien'
        const asked = cv[name]
        const other = cv[otherCode]

        return [
          {
            ...asked,
            who: {
              ...asked.who,
              otherCode,
              otherAvatar: other.who.avatar,
            },
          },
        ]
      },
    },
    Mutation: {
      addProposal: async (parent, { input }, { models }) => {
        try {
          await models.proposals.add(input)
        } catch (ex) {
          logger.error(ex)
          return false
        }

        return true
      },
    },
  }

  logger.info('creating graphql executable schema')
  return makeExecutableSchema({
    typeDefs,
    resolvers,
  })
}
