import React from 'react'
import styled from 'styled-components'
import { Background, RatingsGroup } from 'components'
import Who from './who'

const testProps = {
  who: {
    avatar: 'https://avatars2.githubusercontent.com/u/17828231?s=460&v=4',
    name: 'Fabien JUIF',
    what: 'Javascript developer - Fullstack',
    birthday: Date.UTC(1988, 3, 25),
    worksSince: Date.UTC(2010, 8, 1),
    informations: {
      email: 'fabien.juif@gmail.com',
      phone: '0670988559',
      socials: {
        twitter: 'https://twitter.com/fabienjuif',
        github: 'https://github.com/fabienjuif',
        linkedin: 'https://www.linkedin.com/in/fabienjuif',
      },
    },
  },
  description: 'Fabien JUIF a baigné dans l’informatique depuis son adolescence. Il installe sa première Gentoo stage 1 en 1ère pour migrer vers Archlinux quelques années après. Pour lui pacman n’est pas un jeu, on ne rigole pas avec ça. Il espère pouvoir partager un peu de sa passion avec vous !',
  skills: {
    langages: [
      ['javascript', 5],
      ['typescript', 3],
      ['Rust', 1],
    ],
    frontend: [
      ['ReactJS', 5],
      ['Apollo', 3],
      ['CycleJS', 4],
      ['Redux', 5],
    ],
    backend: [
      ['NodeJS', 5],
      ['Koa', 5],
      ['Express', 5],
      ['Socket.io', 5],
      ['GraphQL', 3],
    ],
    database: [
      ['MongoDB', 3],
      ['PostgreSQL', 3],
      ['Redis', 2],
    ],
    architecture: [
      ['Docker', 4],
      ['GNU/Linux', 4],
      ['Kubernetes', 2],
    ],
  },
}

const CV = (props) => {
  const {
    who,
    description,
    skills,
  } = testProps

  return (
    <div>
      <Who {...who} />

      <Background secondary>
        {description}
      </Background>

      {Object.entries(skills).map(([groupName, ratings]) => <RatingsGroup name={groupName} ratings={ratings} />)}

      <div className="past">
      </div>
    </div>
  )
}

export default styled(CV)``
