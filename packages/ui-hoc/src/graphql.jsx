import React from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import { getDisplayName } from 'recompact'

const defaultMapData = ({ data }) => data
const defaultMapToVariables = props => props
const mapToVariablesInput = variables => ({ input: variables })

const getQuery = (
  query,
  options,
) => {
  const {
    mapData = defaultMapData,
    mapToVariables = defaultMapToVariables,
    wait = false,
  } = options

  return Component => props => (
    <Query
      query={gql(query)}
      variables={mapToVariables(props)}
    >
      {({ loading, error, data }) => {
        if (loading && wait) return null // TODO: loading indicator
        if (error) {
          console.trace(new Error(error)) // TODO: error handler
        }

        if (loading) return <Component {...props} />
        return <Component {...props} {...mapData(data, { loading })} />
      }}
    </Query>
  )
}

const getMutation = (
  mutation,
  options,
) => {
  const {
    mapToVariables = mapToVariablesInput,
  } = options

  const onSubmit = callback => values => callback({ variables: mapToVariables(values) })

  return Component => props => (
    <Mutation
      mutation={gql(mutation)}
    >
      {callback => (
        <Component {...props} onSubmit={onSubmit(callback)} />
      )}
    </Mutation>
  )
}

const graphql = (query, options = {}) => (Component) => {
  const wrapperFactory = query.trim().startsWith('query') ? getQuery : getMutation
  const Wrapper = wrapperFactory(query, options)(Component)

  Wrapper.displayName = `graphql(${getDisplayName(Component)})`

  return Wrapper
}

export default graphql
