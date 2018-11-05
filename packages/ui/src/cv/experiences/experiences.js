import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Summary from './summary'
import Experience from './experience'
import getId from './getExperienceId'

const GET_EXPERIENCES = gql`
  query getExperiences ($name: String!) {
    cvs(name: $name) {
      description
      experiences {
        title
        client {
          name
          color
        }
        for {
          name
          color
        }
        dates {
          from
          to
        }
        informations {
          text
          children {
            text
            children {
              text
            }
          }
        }
      }
    }
  }
  `

const Experiences = ({ className, name }) => (
  <Query
    query={GET_EXPERIENCES}
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
        experiences
      } = cv

      return (
        <div className={className}>
          <h1>Expériences</h1>

          <Summary columns={2}>{experiences}</Summary>

          {experiences.map(experience => <Experience key={getId(experience)} {...experience} />)}
        </div>
      )
    }}
  </Query>
)

export default styled(Experiences)`
  grid-area: experiences;
  margin: 0 auto;

  & > h1 {
    text-align: center;
    margin: 0 auto;
  }

  & > ${Experience} {
    max-width: 70em;
    margin: 10em auto;
  }

  @media print {
    & > ${Experience} {
      max-width: 70em;
      margin: 5em auto;
    }
`
