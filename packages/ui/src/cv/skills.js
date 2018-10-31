import React from 'react'
import styled from 'styled-components'
import { RatingsGroup } from '../components'

const Skills = ({ className, children }) => (
  <div className={className}>
    {Object.entries(children).map(([name, ratings]) => <RatingsGroup key={name} name={name} ratings={ratings} />)}
  </div>
)

export default styled(Skills)`
  grid-area: skills;
  background-color: #3e0065;
  color: white;
  padding: 1em;

  ${RatingsGroup} {
    &:not(:first-child) {
      margin-top: 1em;
    }
  }
`
