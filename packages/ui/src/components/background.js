import styled from 'styled-components'

export default styled.div`
  color: ${({ theme, secondary = false }) => {
    if (secondary) return theme.secondary.fg
    return theme.primary.fg
  }};
  background-color: ${({ theme, gradient = false, secondary = false }) => {
    if (gradient) return 'inherit'
    if (secondary) return theme.secondary.bg
    return theme.primary.bg
  }};
  background: ${({ theme, gradient }) => {
    if (gradient) return `linear-gradient(to right, ${theme.primary.bg}, ${theme.secondary.bg})`
    return ''
  }};
  padding: 1em;
`
