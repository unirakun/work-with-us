import styled from 'styled-components'

export default styled.div`
  grid-area: description;
  padding: 2em;
  margin: 5em auto;
  border-radius: .2em;
  max-width: 40em;
  color: ${({ theme }) => theme.light};
  box-shadow: 0px 0px 20px -10px black;
  background-color: ${({ theme }) => theme.secondary.bg};
`
