import React from 'react'
import SocialLogo from 'social-logos'
import styled from 'styled-components'

const SOCIALS = ['twitter', 'github', 'linkedin']
const getSocial = (text = '') => SOCIALS.find(social => text.includes(social)) || 'unknown'
const getName = (text = '') => text.split('/').pop()

const StyledSocialLogo = styled(SocialLogo)`
  fill: ${({ theme }) => theme.primary.fg};
`

const Social = ({ className, children, href }) => {
  const link = children || href
  const social = getSocial(link)
  const name = getName(link)

    return (
    <a
      className={className}
      href={link}
    >
      <StyledSocialLogo icon={social} size={36} />
      <label>
        {social === 'twitter' && '@'}
        {name}
      </label>
    </a>
  )
}

export default styled(Social)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.light};

  & label {
    margin-left: 1em;
  }
`
