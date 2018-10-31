import React from 'react'
import SocialLogo from 'social-logos'
import styled from 'styled-components'

const SOCIALS = ['twitter', 'github', 'linkedin']
const getSocial = (text = '') => SOCIALS.find(social => text.includes(social)) || 'unknown'

const StyledSocialLogo = styled(SocialLogo)`
  fill: ${({ theme }) => theme.primary.fg};
`

const Social = ({ children, href }) => (
  <a href={children || href}>
    <StyledSocialLogo icon={getSocial(children || href)} size={36} />
  </a>
)

export default Social
