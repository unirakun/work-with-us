export default {
  title: 'Architecte & Développeur fullstack',
  client: {
    name: 'ICES',
    color: 'white',
  },
  for: {
    name: 'Zenika',
    color: 'black',
  },
  dates: {
    from: Date.UTC(2017, 9),
    to: Date.UTC(2018, 0),
  },
  informations: [
    { text: 'L\'ICES (Institut Catholique d\'Etudes Supérieures) a besoin de refondre entièrement leur SI. Cela comprend la gestion des prospects, des étudiants, de la facturation, des salles, des notes, etc. Dans ce cadre j\'ai mis en place l\'architecture logicielle, à base de micro services NodeJS et d\'une gateway GraphQL, hébergé sur le cloud Google (kubernetes).', },
    {
      text: 'Technologies utilisées :',
      children:  [
        {
          text: 'Tests d\'intégration',
          children: [
            { text: 'Cypress', },
            { text: 'Docker', },
          ],
        },
        {
          text: 'Frontend',
          children: [
            { text: 'mobx-state-tree (j\'ai fais une vidéo sur ce sujet) pour avoir un store immutable réactif', },
            { text: 'ReactJS pour gérer les vues et les composants graphiques', },
            { text: 'Tous les outils habituels de qualités (Jest/ESLint)', },
          ],
        },
        {
          text: 'Gateway / Orchestrateur / Aggrégateur',
          children: [
            { text: 'GraphQL pour le contrat de service (protocole)', },
            { text: 'NodeJS en support du GraphQL puisque beaucoup d\'I/O', },
          ],
        },
        {
          text: 'Backend',
          children: [
            { text: 'NodeJS en micro service', },
            { text: 'Koa2 puisque basé sur l\'async/await JS', },
            { text: 'Client logiciel PostgreSQL', },
          ],
        },
        { text: 'BDD: PostgreSQL pour avoir accès aux transactions, mais en utilisant des colonnes \`json\` pour avoir une base de données schemaless, et donc rapide à maintenir.', },
        { text: 'Déploiement: kubectl de Google', },
      ],
    },
  ],
}
