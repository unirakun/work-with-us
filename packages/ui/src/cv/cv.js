import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Who from './who'
import Experiences from './experiences'

const Description = styled.div`
  grid-area: description;
  padding: 2em;
  margin: 5em auto;
  border-radius: .2em;
  max-width: 40em;
  color: ${({ theme }) => theme.light};
  box-shadow: 0px 0px 20px -10px black;
  background-color: ${({ theme }) => theme.secondary.bg};
`

const GET_CV = gql`
  query getCV ($name: String!) {
    cvs(name: $name) {
      description
    }
  }
`

const CV = ({ className, name }) => (
  <div className={className}>
    <Who name={name} />

    <Query
      query={GET_CV}
      variables={{ name }}
    >
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) {
          console.error(error)
          return null
        }

        const { cvs } = data
        const [cv] = cvs

        const {
          description,
        } = cv

        return (
          <Description>
            {description}
          </Description>
        )
      }}
    </Query>

    <Experiences name={name} />
  </div>
)

export default styled(CV)`
  display: grid;
  background-color: #f3f3f3;
  color: #323232;
  grid-template-areas:
    "who"
    "description"
    "experiences";

  @media print {
    background-color: white;
  }
`
