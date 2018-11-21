import React from 'react'

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true // eslint-disable-line no-param-reassign

  return (
    <h1>Oops, nothing here!</h1>
  )
}

export default NotFound
