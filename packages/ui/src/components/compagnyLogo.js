import React from 'react'
import styled from 'styled-components'

const CompagnyLogo = ({ className, src, color }) => (
  <div className={className}>
    <img src={src} />
  </div>
)
export default styled(CompagnyLogo)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 2.5em;
  background-color: ${({ color }) => color || 'white'};
  border-radius: 100%;

  & img {
    max-width: 1.5em;
    max-height: 1.5em;
  }
`
