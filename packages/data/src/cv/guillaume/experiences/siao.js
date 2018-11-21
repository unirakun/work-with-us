export default {
  title: 'Lead Développeur FullStack',
  client: {
    name: 'SIAO',
    color: 'white',
  },
  for: {
    name: 'Netapsys',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2015, 6),
    to: Date.UTC(2016, 2),
  },
  informations: [
    { text: 'Le SIAO est Le Service Intégré de l\'Accueil et de l\'Orientation français.' },
    { text: 'Je suis intervenu pour leur besoin concernant les urgences social, le 115.' },
    {
      text: 'Missions :',
      children: [
        { text: 'Mise en place d’une stack technique moderne et cohérente' },
        { text: 'Challenge sur l’ergonomie de la partie Front-End avec les équipes SIAO' },
        { text: 'Mise en place de la CI/CD' },
        { text: 'Formation de l’équipe de développement Back-End et Front-End' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'AngularJs (1.6)' },
        { text: 'Java 7 / SpringBoot / API RESTFUL' },
        { text: 'Maven / Jenkins' },
      ],
    },
  ],
}
