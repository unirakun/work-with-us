import React from 'react'
import styled from 'styled-components'
import { lifecycle } from 'recompact'
import { NavLink } from 'react-router-dom'
import { Avatar, Social, Age, Background } from '../../../../components'
import Skills from './skills'
import OtherAvatar from './otherAvatar.container'

const Who = ({ className, who, skills }) => {
  const {
    avatar,
    otherAvatar,
    name,
    otherCode,
    what,
    birthday,
    worksSince,
    socials,
  } = who

  return (
    <Background className={className} gradient>
      <Avatar src={avatar} />
      <NavLink to={`/${otherCode}`} className="other">
        <OtherAvatar
          src={otherAvatar}
          name={otherCode}
        />
      </NavLink>

      <div className="description">
        <h1>{name}</h1>
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

const StyledWho = styled(Who)`
  grid-area: who;
  padding-top: 4em;
  padding-bottom: 4em;
  display: grid;
  align-items: center;
  position: relative;
  grid-template-columns: 1vw 10em auto 1fr auto auto 1vw;
  grid-template-rows: 3em 3em 3em 3em auto;
  grid-template-areas:
    ". socials avatar . . other-avatar ."
    ". socials avatar description contacts other-avatar ."
    ". socials avatar age-experience contacts . ."
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
    grid-area: other-avatar;
    font-size: 0.5em;
    cursor: pointer;

    @media print {
      display: none;
    }

    & > ${Avatar} {
      opacity: 0.3;

      &:hover {
        opacity: 1;
      }
    }
  }

  & > ${Avatar} {
    grid-area: avatar;
    justify-self: end;
    margin: 0 3em;
  }

  & > .description {
    grid-area: description;
  }

  & > .age-experience {
    grid-area: age-experience;
  }

  & > .socials {
    grid-area: socials;
    justify-self: end;

    & > *:not(:first-child) {
      margin-top: 1em;
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      ". socials avatar other-avatar"
      "description description description description"
      "age-experience age-experience age-experience age-experience"
      "contacts contacts contacts contacts"
      "skills skills skills skills";
    text-align: center;

    & ${Avatar} {
      justify-self: end;
      margin-left: 3em;
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
