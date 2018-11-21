import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const defaultMapData = ({ data }) => data
const defaultMapToVariables = props => props

export default (
  query,
  mapData = defaultMapData,
  mapToVariables = defaultMapToVariables,
) => Component => props => (
  <Query
    query={gql(query)}
    variables={mapToVariables(props)}
  >
    {({ loading, error, data }) => {
      if (loading) return null // TODO: loading indicator
      if (error) {
        console.trace(new Error(error)) // TODO: error handler
        return null
      }

      return <Component {...props} {...mapData(data, props)} />
    }}
  </Query>
)
