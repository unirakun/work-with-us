import { createVisitFieldDefinition } from './resolver'

export default createVisitFieldDefinition(
  'api',
  (params, next) => async (...args) => {
    const {
      name: apiName,
    } = params

    if (!apiName) {
      return next()
    }

    const [, { input }, context, definition] = args
    const { models } = context

    if (definition.parentType.name === 'Query') {
      return models[apiName].list()
    }
    if (definition.parentType.name === 'Mutation') {
      await models[apiName].add(input)
      return true
    }

    return next()
  },
)
