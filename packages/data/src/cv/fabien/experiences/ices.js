export default {
  title: 'Architecte & Développeur fullstack',
  client: {
    name: 'ICES',
    logo: 'https://media.licdn.com/dms/image/C4D0BAQEq1mZmpbFWUw/company-logo_200_200/0?e=1548892800&v=beta&t=szaP32uZXZd-SKt4kfSsU4kg-ql9F73FPUruyihCOyU',
    color: 'white',
  },
  for: {
    name: 'Zenika',
    logo: 'https://media.licdn.com/dms/image/C4D0BAQGnZ7JP17AK9g/company-logo_200_200/0?e=1548892800&v=beta&t=kXYFe01xQsQ6aZgTw7YFKfOcaFC5alVvheSwVfk6ZzQ',
    color: 'black',
  },
  dates: {
    from: Date.UTC(2017, 9),
    to: Date.UTC(2018, 0),
  },
  informations: [
    `L'ICES (Institut Catholique d'Etudes Supérieures) a besoin de refondre entièrement leur SI.
    Cela comprend : la gestion des prospects, des étudiants, de la facturation, des salles, des notes, etc.
    Dans ce cadre j'ai mis en place l'architecture logicielle, à base de micro services NodeJS et d'une
    gateway GraphQL, hébergé sur le cloud Google.`,
    `Les technologies utilisées sont les suivantes:
      > Tests d'intégration: Cypress et docker
      > Frontend
        - mobx-state-tree (j'ai fais une vidéo sur ce sujet) pour avoir un store immutable réactif
        - ReactJS pour gérer les vues et les composants graphiques
        - Tous les outils habituels de qualités (Jest/ESLint)
      > Gateway / Orchestrateur / Aggrégateur
        - GraphQL pour le contrat de service (protocole)
        - NodeJS en support du GraphQL puisque beaucoup d'I/O
      > Backend
        - NodeJS en micro service
        - Koa2 puisque basé sur l'async/await JS
        - client logiciel postgreSQL
      > BDD: PostgreSQL pour avoir accès aux transactions, mais en utilisant des colonnes \`json\` pour avoir une base de données schemaless, et donc rapide à maintenir.
      > Déploiement: kubectl de Google`,
  ],
}
