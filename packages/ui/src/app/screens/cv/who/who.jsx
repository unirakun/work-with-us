import React from 'react'
import styled from 'styled-components'
import { lifecycle } from 'recompact'
import { NavLink } from 'react-router-dom'
import { Avatar, Background, Age, Social } from '../../../../components'
import Skills from './skills'
import OtherAvatar from './otherAvatar.container'

const Who = ({ className, name, who, skills }) => {
  const {
    avatar,
    otherAvatar,
    fullName,
    otherCode,
    what,
    birthday,
    worksSince,
    socials,
  } = who

  return (
    <Background className={className} gradient>
      <Avatar className="avatar" src={avatar || `/${name}.png`} />
      <NavLink to={`/${otherCode}`} className="other">
        <OtherAvatar
          className="avatar"
          src={otherAvatar}
          name={otherCode}
        />
      </NavLink>

      <div className="description">
        <h1>{fullName || name}</h1>
        <h2>{what}</h2>
      </div>

      <div className="age-experience">
        <Age from={birthday} suffix=" ans - " />
        <Age from={worksSince} suffix=" ans d'expérience" />
      </div>

      <div className="socials">
        {socials.map(social => <Social key={social.name} {...social} />)}
      </div>

      <Skills>{skills}</Skills>

      <div id="particles-js" />
    </Background>
  )
}

Who.defaultProps = {
  who: {
    socials: [
      {
        name: 'twitter',
      },
      {
        name: 'github',
      },
      {
        name: 'linkedin',
      },
    ],
  },
  skills: [],
}

const StyledWho = styled(Who)`
  min-height: 20em;
  grid-area: who;
  padding-top: 4em;
  padding-bottom: 4em;
  display: grid;
  align-items: center;
  position: relative;
  grid-template-columns: 5em 10em auto 1fr auto auto 5em;
  grid-template-rows: 3em 3em 3em 3em auto;
  grid-template-areas:
    ". socials avatar . . . ."
    ". socials avatar description . . ."
    ". socials avatar age-experience . . ."
    ". socials avatar . . . ."
    "skills skills skills skills skills skills skills";

  & > #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > .other {
    font-size: 0.5em;
    cursor: pointer;

    @media print {
      display: none;
    }

    & > .avatar {
      opacity: 0.3;
      position: absolute;
      top: 1em;
      right: 1em;

      &:hover {
        opacity: 1;
      }
    }
  }

  & > .avatar {
    grid-area: avatar;
    justify-self: end;
    margin: 0 3em;
  }

  & > .description {
    grid-area: description;
  }

  & > .age-experience {
    grid-area: age-experience;
    min-height: 1em;
  }

  & > .socials {
    grid-area: socials;
    justify-self: end;
    min-width: 12em;

    & > *:not(:first-child) {
      margin-top: 1em;
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      ". socials avatar ."
      "description description description description"
      "age-experience age-experience age-experience age-experience"
      "skills skills skills skills";
    text-align: center;

    & > .avatar {
      justify-self: end;
      margin-left: 3em;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "socials avatar avatar ."
      "description description description description"
      "age-experience age-experience age-experience age-experience"
      "skills skills skills skills";

    & > .socials {
      min-width: inherit;
      justify-self: start;
      margin-left: 1em;

      & > a {
        & > span {
          display: none;
        }
      }
    }

    & > .avatar {
      justify-self: center;
    }
  }

  & > * {
    z-index: 10;

    &#particles-js {
      z-index: 0;
    }
  }
`

export default lifecycle({
  componentDidMount: async () => {
    /* eslint-env browser */
    if (typeof window !== 'undefined') {
      await import('particles.js')

      window.particlesJS(
        'particles-js',
        {
          retina_detect: true,
          particles: {
            size: {
              value: 1,
            },
            opacity: {
              value: 0.8,
            },
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              opacity: 0.5,
            },
          },
        },
      )
    }
  },
})(StyledWho)
