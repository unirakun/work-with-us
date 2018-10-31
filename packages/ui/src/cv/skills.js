import React from 'react'
import styled from 'styled-components'
import { RatingsGroup } from 'components'

export default styled.div.attrs({
  children: ({ data }) => Object.entries(data).map(([name, ratings]) => <RatingsGroup name={name} ratings={ratings} />),
})`
  background-color: #3e0065;
  color: white;
`
