import React from 'react'
import styled from 'styled-components'
import Stars from './stars'

const Label = styled.label`
  text-align: right;
  margin-right: .5em;
`

const Rating = ({ className, children = [] }) => {
  return (
    <div className={className}>
      <Label>{children[0]}</Label>
      <Stars>
        {children}
      </Stars>
    </div>
  )
}

export default styled(Rating)`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 12em;
`
