export default {
  title: 'Développeur Frontend',
  client: {
    name: 'GE My Money Bank',
    color: 'white',
  },
  for: {
    name: 'Zenika',
    color: 'black',
  },
  dates: {
    from: Date.UTC(2016, 2),
    to: Date.UTC(2016, 4),
  },
  informations: [
    { text: 'Création d\'un front-end avec les technologies Facebook pour une nouvelle application web de la branche "Money", solutions de financement pour les particuliers.', },
    {
      text: 'Missions :',
      children: [
        { text: 'Mise en place du socle technique', },
        { text: 'Mise en place du socle de tests', },
        { text: 'Mise en place de la CI/CD avec les technologies cloud', },
      ],
    },
    {
      text: 'Technologies utilisées :',
      children: [
        { text: 'ReactJS / Redux', },
        { text: 'Webpack / Babel / ESLint', },
        { text: 'Mocha / Chai / Sinon', },
        { text: 'CircleCI / Github', },
        { text: 'Docker', },
      ],
    },
  ],
}
