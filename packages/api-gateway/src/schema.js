import { makeExecutableSchema } from 'graphql-tools'
import { cv } from '@work-with-us/data'
import typeDefs from './types'

const proposals = [
]

const mapCV = (askedCv, othersCv) => {
  const otherCode = askedCv.code === 'fabien' ? 'guillaume' : 'fabien'
  const otherCv = othersCv[otherCode]

  return {
    ...askedCv,
    who: {
      ...askedCv.who,
      otherCode,
      otherAvatar: otherCv.who.avatar,
    },
  }
}

const resolvers = {
  Query: {
    proposals: () => proposals,
    cvs: (root, { name }) => {
      if (!name) return Object.values(cv).map(item => mapCV(item, cv))

      return [mapCV(cv[name], cv)]
    },
  },
  Mutation: {
    addProposal: (root, { input }) => {
      proposals.push(input)
      return true
    },
  },
}

module.exports = makeExecutableSchema({ typeDefs, resolvers })
