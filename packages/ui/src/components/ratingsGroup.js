import React from 'react'
import styled from 'styled-components'
import Rating from './rating'

const RatingsGroup = ({ className, name, ratings }) => (
  <div className={className}>
    {ratings.map(rating => <Rating key={rating[0]}>{rating}</Rating>)}
  </div>
)

export default styled(RatingsGroup)`
  margin: 1em;
`
