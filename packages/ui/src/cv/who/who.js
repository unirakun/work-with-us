import React from 'react'
import styled from 'styled-components'
import { lifecycle } from 'recompact'
import { Contact, Avatar, Social, Age, Background } from '../../components'

const GridArea = styled.div`
  grid-area: ${({ name }) => name};
`

const Description = styled.div`
  & h1, & h2 {
    margin: 0;
  }
`

const Contacts = styled.div`
  & > *:not(:first-child) {
    margin-top: 1em;
  };
`

const Socials = styled.div`
  justify-self: end;
`

const StyledAvatar = styled(Avatar)`
  justify-self: end;
  margin: 0 1em;
`

const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Who = (props) => {
  const {
    className,
    children,
    name,
    avatar,
    what,
    informations,
    birthday,
    worksSince,
  } = props

  const {
    socials,
    email,
    phone,
  } = informations

  const {
    twitter,
    github,
    linkedin
  } = socials

  return (
    <Background className={className} gradient>
      <GridArea name="avatar" as={StyledAvatar} src={avatar} />

      <GridArea name="description" as={Description}>
        <h1>{name}</h1>
        <h2>{what}</h2>
      </GridArea>

      <GridArea name="age-experience">
        <Age from={birthday} suffix=" ans - "/>
        <Age from={worksSince} suffix=" ans d'expérience" />
      </GridArea>

      <GridArea name="contacts" as={Contacts}>
        <Contact>{email}</Contact>
        <Contact>{phone.split('').reduce((phone, digit, index) => `${phone}${index % 2 || index === 0 ? '' : '.'}${digit}`, '')}</Contact>
      </GridArea>

      <GridArea name="socials" as={Socials}>
        <Social href={twitter} />
        <Social href={github} />
        <Social href={linkedin} />
      </GridArea>

      {children}

      <Particles id="particles-js" />
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
  grid-template-columns: 1vw auto 1fr auto 3em 1vw;
  grid-template-areas:
    ". avatar . . socials ."
    ". avatar description contacts socials ."
    ". avatar age-experience contacts socials ."
    ". avatar . . socials ."
    "skills skills skills skills skills skills";

  & > * {
    z-index: 10;

    &#particles-js {
      z-index: 0;
    }
  }
`

export default lifecycle({
  componentDidMount: async () => {
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
