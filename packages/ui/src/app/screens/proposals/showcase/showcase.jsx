import React from 'react'

const Showcase = ({ children }) => (
  <ul>
    {children.map(({ name, quote }) => (
      <li>
        {`${name} - (${quote})`}
      </li>
    ))}
  </ul>
)

Showcase.defaultProps = {
  children: [],
}

export default Showcase
