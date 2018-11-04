import styled from 'styled-components'

export default styled.img.attrs({
  alt: 'avatar',
})`
  max-width: 10em;
  max-height: 10em;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.light};
  box-shadow: 0px 0px 20px -10px black;
`
