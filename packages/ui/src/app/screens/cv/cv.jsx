import React from 'react'
import styled from 'styled-components'
import Who from './who'
import Experiences from './experiences'
import Description from './description'

const CV = ({ className, name }) => (
  <div className={className}>
    <Who name={name} />

    <Description name={name} />
    <Experiences name={name} />
  </div>
)

export default styled(CV)`
  display: grid;
  background-color: #f3f3f3;
  color: #323232;
  grid-template-areas:
    "who"
    "description"
    "experiences";

  @media print {
    background-color: white;
  }
`
