/* eslint-disable */ /* FIXME: */
import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const Proposals = () => (
  <Query
    query={gql`
      {
        proposals {
          title
          contact {
            email
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) {
        console.error(error)
        return null
      }

      const { proposals } = data

      return (
        <ul>
          {proposals.map(({ title, contact }) => <li>{title} - ({contact.email})</li>)}
        </ul>
      )
    }}
  </Query>
)

export default Proposals
