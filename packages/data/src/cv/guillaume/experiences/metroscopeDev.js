export default {
  title: 'Lead Développeur Frontend',
  client: {
    name: 'Metroscope',
    color: '#0052a9',
  },
  for: {
    name: 'alakarteio',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2018, 6),
    to: Date.UTC(2019, 2),
  },
  informations: [
    { text: 'Metroscope est une startup, filiale du groupe EDF, composé d’une dizaine de personnes.' },
    { text: 'Avec Fabien JUIF, nous avons mis en place et continuons à développer le produit Metroscope sur la partie Front-End à distance.' },
    { text: 'Une fois celle-ci sécurisée et en production nous avons formé nos successeurs afin qu’ils puissent être autonome sur la stack mise en place.' },
    {
      text: 'Missions :',
      children: [
        { text: 'Développement Front-End' },
        { text: 'Atelier UX / UI' },
        { text: 'Entretiens et choix des successeurs' },
        { text: 'Formation des successeurs' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'ReactJS / Redux / k-ramel / react-vis / D3.js / JSS' },
        { text: 'Java 8 / SpringBoot' },
        { text: 'Webpack / Babel / ESLint' },
        { text: 'Cypress / Jest' },
        { text: 'Docker / CircleCI / Kubernetes' },
        { text: 'Github / Jira' },
      ],
    },
  ],
}
