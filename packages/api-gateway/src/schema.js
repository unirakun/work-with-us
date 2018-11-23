import { makeExecutableSchema } from 'graphql-tools'
import makeProposals from '@work-with-us/api-proposals'
import { cv } from '@work-with-us/data'
import logger from '@work-with-us/logger'
import typeDefs from './types'

module.exports = () => {
  const proposals = makeProposals()

  const resolvers = {
    Query: {
      proposals: async () => {
        let res
        try {
          res = await proposals.list()
        } catch (ex) {
          logger.error(ex)
          throw ex
        }

        return res
      },
      cvs: (root, { name }) => {
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
      addProposal: async (root, { input }) => {
        try {
          await proposals.add(input)
        } catch (ex) {
          logger.error(ex)
          return false
        }

        return true
      },
    },
  }

  logger.info('creating graphql executable schema')
  return makeExecutableSchema({ typeDefs, resolvers })
}
