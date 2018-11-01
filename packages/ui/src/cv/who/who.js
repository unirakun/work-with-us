import React from 'react'
import styled from 'styled-components'
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

const Who = (props) => {
  const {
    className,
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
    <Background className={className}>
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
    </Background>
  )
}

export default styled(Who)`
  grid-area: who;
  padding-top: 2em;
  padding-bottom: 2em;
  display: grid;
  align-items: center;
  grid-template-columns: 1vw auto 1fr auto 3em 1vw;
  grid-template-areas:
    ". avatar . . socials ."
    ". avatar description contacts socials ."
    ". avatar age-experience contacts socials ."
    ". avatar . . socials .";
`