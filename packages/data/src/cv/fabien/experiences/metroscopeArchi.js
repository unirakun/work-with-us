export default {
  title: 'Consultant en architecture et gestion de projet',
  client: {
    name: 'Metroscope',
    color: '#0052a9',
  },
  for: {
    name: 'alakarteio',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2018, 2),
    to: Date.UTC(2018, 5),
  },
  informations: [
    { text: 'Metroscope est une startup, filiale du groupe EDF, composée d’une dizaine de personnes. Le Metroscope permet de déterminer rapidement les anomalies survenant sur les systèmes de refroidissement des centrales nucléaires.' },
    { text: 'Avec Guillaume CRESPEL, nous avons challengé leur MVP afin de produire une première version sur une stack solide et efficace tout en gardant en vue les besoins et contraintes d\'une grosse structure comme EDF.' },
    {
      text: 'Missions :',
      children: [
        { text: 'Réflexion sur la structure de base de données' },
        { text: 'Réflexion sur les technologies adéquates Front-end et Back-End à utiliser' },
        { text: 'Mise en place du socle technique Front-End et Back-End' },
        { text: 'Mise en place d’une CI / CD' },
        { text: 'Atelier UX / UI' },
        { text: 'Aide à la gestion de projet et conseils en agilité' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'ReactJS / Redux / k-ramel / react-vis / D3.js / JSS' },
        { text: 'Java 8 / SpringBoot' },
        { text: 'Webpack / Babel / ESLint' },
        { text: 'Cypress / Jest' },
        { text: 'Docker / CircleCI / Kubernetes / GKE (google cloud)' },
        { text: 'Github / Jira' },
      ],
    },
  ],
}
