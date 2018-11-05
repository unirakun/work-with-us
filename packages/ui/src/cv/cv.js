import React from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Who from './who'
import Experiences from './experiences'
import Skills from './skills'

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

const CV = ({ className, name }) => (
  <Query
      query={gql`
        {
          cvs(name: "fabien") {
            who {
              name
              avatar
              what
              birthday
              worksSince
              socials {
                name,
                url
              }
            }
            experiences {
              title
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
      `}
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
          who,
          description,
          skills,
          experiences,
        } = cv

        return (
          <div className={className}>
            <Who {...who}>
              {/* <Skills>
                {skills}
              </Skills> */}
            </Who>

            <Description>
              {description}
            </Description>

            {/* <Experiences>
              {experiences}
            </Experiences> */}
          </div>
        )
      }}
  </Query>
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
