import React from 'react'
import styled from 'styled-components'

const CompagnyLogo = ({ className }) => (
  <div className={className}>
    <div className="image" />
  </div>
)

const getBackgroundUrl = ({ name = '' }) => (
  name
    .toLowerCase()
    .replace(/\//g, '')
    .replace(/é/g, 'e')
    .split(' ')
    .join('')
)

export default styled(CompagnyLogo)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 2.5em;
  background-color: ${({ color }) => color || 'white'};
  border-radius: 100%;

  & > .image {
    width: 1.5em;
    height: 1.5em;
    background-image: url('${getBackgroundUrl}.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`
