import styled from 'styled-components'
import Stars from 'react-star-rating-component'

export default styled(Stars).attrs({
  name: ({ name }) => name,
  value: ({ children }) => children,
  starColor: ({ theme }) => theme.light,
  emptyStarColor: '#280b4bce',
  editing: false,
})`
`
