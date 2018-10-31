import React from 'react'
import styled from 'styled-components'
import Rating from './rating'

const Label = styled.label`
  font-size: 1.3em;
  margin-right: 1em;
  text-transform: capitalize;
`

export default styled.div.attrs({
  children: ({ name, ratings }) => [
    <Label>{name}</Label>,
    ratings.map(rating => <Rating>{rating}</Rating>)
  ],
})`
`
