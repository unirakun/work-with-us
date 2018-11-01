import React from 'react'
import styled from 'styled-components'
import { Background } from '../components'
import Who from './who'
import Experiences from './experiences'
import Skills from './skills'

const Description = styled(Background).attrs({
  secondary: true,
})`
  grid-area: description;
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
      <Who {...who} />

      <Description>
        {description}
      </Description>

      <Skills>
        {skills}
      </Skills>

      <Experiences>
        {experiences}
      </Experiences>
    </div>
  )
}

export default styled(CV)`
  display: grid;
  max-width: 70em;
  margin: 0 auto;
  background-color: #f3f3f3;
  color: #323232;
  box-shadow: 0px 0px 20px -10px black;
  grid-template-columns: auto 15em;
  grid-template-areas:
    "who who"
    "description description"
    "experiences skills";
`
