import React from 'react'
import styled from 'styled-components'
import { Background } from '../components'
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

const CV = (props) => {
  const {
    className,
    who,
    description,
    skills,
    experiences,
  } = props

  return (
    <div className={className}>
      <Who {...who}>
        <Skills>
          {skills}
        </Skills>
      </Who>

      <Description>
        {description}
      </Description>

      <Experiences>
        {experiences}
      </Experiences>
    </div>
  )
}

export default styled(CV)`
  display: grid;
  background-color: #f3f3f3;
  color: #323232;
  grid-template-areas:
    "who"
    "description"
    "experiences";
`
