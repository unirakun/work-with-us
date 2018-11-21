import styled from 'styled-components'

export default styled.div`
  min-width: 10em;
  min-height: 10em;
  max-width: 10em;
  max-height: 10em;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.light};
  background-image: url('${({ src }) => src}');
  background-size: contain;
  box-shadow: 0px 0px 20px -10px black;
`
