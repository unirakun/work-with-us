import React from 'react'
import styled from 'styled-components'
import { Background } from '../components'
import Who from './who'
import Experiences from './experiences'
import Skills from './skills'

const Description = styled.div`
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
      <Who {...who}>
        <Skills>
          {skills}
        </Skills>
      </Who>

      {/* TODO: move this
            <Description>
              {description}
            </Description>
      */}

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
