import React from 'react'
import SocialLogo from 'social-logos'
import styled from 'styled-components'

const getPseudo = (text = '') => text.split('/').pop()

const StyledSocialLogo = styled(SocialLogo)`
  fill: ${({ theme }) => theme.primary.fg};
`

const Social = ({ className, name, url }) => {
  const pseudo = getPseudo(url)

  return (
    <a
      className={className}
      href={url}
    >
      <StyledSocialLogo icon={name} size={36} />
      <label>
        {name === 'twitter' && '@'}
        {pseudo}
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
