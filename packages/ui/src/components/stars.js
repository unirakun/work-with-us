import styled from 'styled-components'
import Stars from 'react-star-rating-component'

export default styled(Stars).attrs({
  name: ({ children }) => children[0],
  value: ({ children }) => children[1],
  starColor: ({ theme }) => theme.primary.bg,
  emptyStarColor: '#cecece',
  editing: false,
})`
`
