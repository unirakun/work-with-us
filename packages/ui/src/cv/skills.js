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
  color: ${({ theme }) => theme.light};
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${RatingsGroup} {
    &:not(:first-child) {
      margin-left: 1em;
    }
  }
`
