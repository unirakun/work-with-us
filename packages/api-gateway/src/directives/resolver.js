import { defaultFieldResolver } from 'graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'

const resolvers = new Map()

export const registerResolver = (directiveName, resolver) => {
  resolver.directiveName = directiveName
  resolvers.set(directiveName, resolver)
}

export const sortedResolve = baseResolve => (field) => {
  const {
    astNode,
  } = field

  const {
    directives,
  } = astNode


  const middlewares = directives
    .map(({ name }) => name.value)
    .map(key => resolvers.get(key))
  middlewares.push(() => baseResolve)

  return async (...args) => {
    const middlewaresToExecute = [...middlewares]
    let index = 0

    const next = async () => {
      const nextMiddleware = middlewaresToExecute[index]

      console.log(`Executing ${nextMiddleware.directiveName} on ${field.name}`)

      index += 1
      const nextRes = await nextMiddleware(field._directivesArgs[nextMiddleware.directiveName], next)(...args)
      return nextRes
    }

    const res = await next()
    return res
  }
}

export const createVisitFieldDefinition = (directiveName, resolver) => {
  registerResolver(directiveName, resolver)

  return class extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
      if (!field._baseResolve) {
        field._baseResolve = field.resolve || defaultFieldResolver
      }

      if (!field._directivesArgs) field._directivesArgs = []
      field._directivesArgs[directiveName] = this.args

      field.resolve = sortedResolve(field._baseResolve)(field)
    }
  }
}
