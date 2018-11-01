import styled from 'styled-components'

export default styled.div`
  color: ${({ theme, secondary = false }) => secondary ? theme.secondary.fg : theme.primary.fg};
  background-color: ${({ theme, gradient = false, secondary = false }) => {
    if (gradient) return 'inherit'
    if (secondary) return theme.secondary.bg
    return theme.primary.bg
  }};
  background: ${({ theme, gradient }) => gradient ? `linear-gradient(to right, ${theme.primary.bg}, ${theme.secondary.bg})` : ''};
  padding: 1em;
`
