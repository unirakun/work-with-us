import React from 'react'
import styled from 'styled-components'
import { RatingsGroup } from '../../../../components'

const Skills = ({ className, children }) => (
  <div className={className}>
    {children.map(({ name, skills }) => <RatingsGroup key={name} skills={skills} />)}
  </div>
)

export default styled(Skills)`
  grid-area: skills;
  background-color: #0006;
  color: ${({ theme }) => theme.light};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 -1em;
  margin-bottom: -4em;
  margin-top: 4em;
  padding: 1em;
  flex-wrap: wrap;

  & > ${RatingsGroup} {
    @media (max-width: 550px) {
      margin: 1em 0;
    }
  }
`
