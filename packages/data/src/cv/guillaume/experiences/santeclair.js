export default {
  title: 'Lead Développeur Frontend',
  for: {
    name: 'Santeclair',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2016, 5),
    to: Date.UTC(2018, 0),
  },
  informations: [
    { text: 'Santéclair est un réseau de mutuelle avec une DSI de 20 personnes. Santéclair permet de simplifier l\'accès au soins de ses adhérents.' },
    { text: 'Dans le cadre de leur digitalisation j\'étais leur responsable technique Front-End pour le développement d\'applications web / mobile d\'aide à l\'accès au soin.' },
    {
      text: 'Missions :',
      children: [
        { text: 'Développement d\'applications web et mobile' },
        { text: 'Formation des équipes à des technologies Front-End moderne' },
        { text: 'Mise en relation et partenariat avec des sociétés permettant la réservation en ligne (Pages Jaunes, MonDocteur, Doctolib)' },
        { text: 'Acteur de l’agilisation de la société' },
        { text: 'Acteur de l’évolution des processus et de la plateforme CI' },
      ],
    },
    {
      text: 'Applications réalisées : ',
      children: [
        { text: 'TrouvTonDoc : Permet la géolocalisation de professionnels de santé en dehors du réseau santéclair, le calcul du reste à charge, ainsi que la prise de rendez-vous en ligne' },
        { text: 'Devis Dentaire : Permet la réalisation de devis dentaire en ligne, avec pour objectif une ergonomie simplifiée et le calcul de reste à charge' },
        { text: 'Télémédecine : Permet la mise en relation d’un assuré avec des services tel que MesDocteurs' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'ReactJS / Redux / redux-saga' },
        { text: 'Java 8 / SpringBoot' },
        { text: 'Webpack / Babel / ESLint' },
        { text: 'Jest' },
        { text: 'CircleCI / Github' },
        { text: 'Docker' },
      ],
    },
    {
      text: 'Contributions opensources : ',
      children: [
        { text: 'k-redux-factory - aide à la création de reducers, actions et sélecteurs Redux' },
        { text: 'kriya - bibliothèques de composants React-Redux' },
        { text: 'hoc-little-router - utilitaire de configuration de redux-little-router' },
        { text: 'roadhog - utilitaire redux-saga d\'appels d\'API' },
        { text: 'k-redux-saga-tester - utilitaire de test des sagas redux-sagas' },
      ],
    },
  ],
}
