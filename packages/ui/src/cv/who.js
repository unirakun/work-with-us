import React from 'react'
import { Contact, Avatar, Social, Age, Background } from 'components'

const Who = (props) => {
  const {
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
    <Background>
      <Avatar src={avatar} />

      <div className="description">
        <h1>{name}</h1>
        <h2>{what}</h2>

        <div className="informations">
          <div className="age-experience">
            <Age from={birthday} suffix=" ans - "/>
            <Age from={worksSince} suffix=" ans d'expérience" />
          </div>

          <div className="socials">
            <Social href={twitter} />
            <Social href={github} />
            <Social href={linkedin} />
          </div>

          <Contact>{email}</Contact>
          <Contact>{phone.split('').reduce((phone, digit, index) => `${phone}${index % 2 || index === 0 ? '' : '.'}${digit}`, '')}</Contact>
        </div>
      </div>
    </Background>
  )
}

export default Who
