import React from 'react'
import styled from 'styled-components'
import Rating from './rating'

const Label = styled.label`
  font-size: 1.3em;
  margin-right: 1em;
  text-transform: capitalize;
`

const RatingsGroup = ({ className, name, ratings }) => (
  <div className={className}>
    {/* <Label>{name}</Label> */}
    {ratings.map(rating => <Rating key={rating[0]}>{rating}</Rating>)}
  </div>
)

export default styled(RatingsGroup)`
`
