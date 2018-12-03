import { makeExecutableSchema } from 'graphql-tools'
import { cv } from '@work-with-us/data'
import logger from '@work-with-us/logger'
import typeDefs from './types'
import schemaDirectives from './directives'

export default () => {
  const resolvers = {
    Query: {
      cvs: (parent, { name }) => {
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
  }

  logger.info('creating graphql executable schema')
  return makeExecutableSchema({
    typeDefs,
    resolvers,
    schemaDirectives,
  })
}
