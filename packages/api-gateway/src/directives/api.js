/* eslint-disable no-underscore-dangle, no-param-reassign */
// code from: https://blog.apollographql.com/reusable-graphql-schema-directives-131fb3a177d1
import { defaultFieldResolver } from 'graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'

function ensureFieldsWrapped(objectType) {
  // Mark the GraphQLObjectType object to avoid re-wrapping:
  if (objectType._apiFieldsWrapped) return
  objectType._apiFieldsWrapped = true

  const fields = objectType.getFields()

  Object.keys(fields).forEach((fieldName) => {
    const field = fields[fieldName]
    const { resolve = defaultFieldResolver } = field

    field.resolve = async (...args) => {
      const apiName = (
        field._apiName
        || objectType._apiName
      )

      if (!apiName) {
        return resolve.apply(this, args)
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

      return resolve.apply(this, args)
    }
  })
}

export default class ApiDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field, details) {
    ensureFieldsWrapped(details.objectType)
    field._apiName = this.args.name
  }
}
