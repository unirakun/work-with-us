import React from 'react'
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo'

const defaultMapToVariables = props => props

export default (
  query,
  mapToVariables = defaultMapToVariables,
) => Component => props => (
  <ApolloConsumer>
    {client => (
      <Component
        {...props}
        onMouseEnter={(...args) => {
          if (props.onMouseEnter) props.onMouseEnter(...args)

          client.query({
            query: gql(query),
            variables: mapToVariables(props),
          })
        }}
      />
    )}
  </ApolloConsumer>
)
