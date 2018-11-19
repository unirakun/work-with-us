import React from 'react'
import styled from 'styled-components'
import Rating from './rating'

const RatingsGroup = ({ className, skills }) => (
  <div className={className}>
    {skills.map(({ name, note }) => <Rating key={name} name={name}>{note}</Rating>)}
  </div>
)

export default styled(RatingsGroup)`
  margin: 1em;
`
