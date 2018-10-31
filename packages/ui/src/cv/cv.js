import React from 'react'
import styled from 'styled-components'
import { Background } from '../components'
import Who from './who'
import Experiences from './experiences'
import Skills from './skills'

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
  experiences: [
    {
      title: 'Lead Développeur Frontend',
      client: {
        name: 'Santéclair',
        logo: 'https://media.licdn.com/dms/image/C560BAQFNCDPrSjs53g/company-logo_200_200/0?e=1548892800&v=beta&t=I4F8kCu48W5_Qs4R4-rDeLykn4qOmEfMZE6EaDpGmjI',
      },
      for: {
        name: 'Zenika',
        logo: 'https://media.licdn.com/dms/image/C4D0BAQGnZ7JP17AK9g/company-logo_200_200/0?e=1548892800&v=beta&t=kXYFe01xQsQ6aZgTw7YFKfOcaFC5alVvheSwVfk6ZzQ',
      },
      dates: {
        from: Date.UTC(2017, 1),
        to: Date.UTC(2017, 8),
      },
      informations: [
        'Santéclair, réseaux de soins, souhaite moderniser sa relation avec ses clients et cela passe par de nouvelles applications avec des écrans plus travaillés. Le but principal de la mission est de de former leur lead développeur Front-End sur les technologies liées à ReactJS et Redux, puis de l’aider à mettre en place un socle technique stable et facilement maintenable pour développer toutes les applications',
        `> Mise en place d’une architecture frontend réactive et évolutive basée sur une architecture
        orientée composants proposée par ReactJS (produit Facebook) et une approche unidirectionnelle
        et événementielle de traitement des données avec Redux et redux-saga
        > Mise en place d’une intégration continue (CI) basée sur Jenkins et Docker
        > Mise en place d’un déploiement continu (CD) basée sur Docker
        > Outils de construction et de tests
        > Construction de l’application sur les briques ReactJS, Redux et react-redux
        > Création d’une image Docker
        > Création de scripts bash d’aide à la construction de l’application à ses différents stades de maturité`,
        `Technologies utilisées :
        - ReactJS / Redux / redux-saga
        - Webpack / Babel / ESLint
        - Jest
        - CircleCI / Github
        - Docker`,
        `Création des bibliothèques open source (voir mon profil perso) :
        - k-redux-factory, aide à la création de reducers, actions et sélecteurs Redux
        - kriya, bibliothèques de composants React-Redux
        - hoc-little-router, utilitaire de configuration de redux-little-router,
        - roadhog, utilitaire redux-saga d'appels d'API
        - k-redux-saga-tester, utilitaire de test des sagas redux-sagas`,
      ]
    }
  ]
}

const Description = styled(Background).attrs({
  secondary: true,
})`
  grid-area: description;
`

const CV = ({ className }) => {
  const {
    who,
    description,
    skills,
    experiences,
  } = testProps

  return (
    <div className={className}>
      <Who {...who} />

      <Description>
        {description}
      </Description>

      <Skills>
        {skills}
      </Skills>

      <Experiences>
        {experiences}
      </Experiences>
    </div>
  )
}

export default styled(CV)`
  display: grid;
  grid-template-columns: auto 15em;
  grid-template-areas:
    "who who"
    "description description"
    "experiences skills";
`
