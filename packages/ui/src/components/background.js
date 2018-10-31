import styled from 'styled-components'

export default styled.div`
  color: ${({ theme, secondary = false }) => secondary ? theme.secondary.fg : theme.primary.fg};
  background-color: ${({ theme, secondary = false }) => secondary ? theme.secondary.bg : theme.primary.bg};
  padding: 1em;
`
