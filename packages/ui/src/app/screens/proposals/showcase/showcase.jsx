import React from 'react'

const Showcase = ({ children }) => {
  const { clientQuotes = [] } = children
  return (
    <ul>
      {clientQuotes.map(({ name, quote }) => (
        <li key={name}>
          {`${name} - (${quote})`}
        </li>
      ))}
    </ul>
  )
}

Showcase.defaultProps = {
  children: {},
}

export default Showcase
