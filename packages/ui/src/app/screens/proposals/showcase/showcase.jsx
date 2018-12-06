import React from 'react'

const Showcase = ({ children }) => (
  <ul>
    {children.map(({ title, quote }) => (
      <li>
        {`${title} - (${quote})`}
      </li>
    ))}
  </ul>
)

Showcase.defaultProps = {
  children: [],
}

export default Showcase
