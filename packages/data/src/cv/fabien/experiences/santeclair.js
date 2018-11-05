export default {
  title: 'Lead Développeur Frontend',
  client: {
    name: 'Santéclair',
    color: 'white',
  },
  for: {
    name: 'Zenika',
    color: 'black',
  },
  dates: {
    from: Date.UTC(2017, 1),
    to: Date.UTC(2017, 8),
  },
  informations: [
    { text: 'Santéclair, réseaux de soins, souhaite moderniser sa relation avec ses clients et cela passe par de nouvelles applications avec des écrans plus travaillés. Le but principal de la mission est de de former leur lead développeur Front-End sur les technologies liées à ReactJS et Redux, puis de l’aider à mettre en place un socle technique stable et facilement maintenable pour développer toutes les applications', },
    {
      text: 'Missions :',
      children: [
        { text: 'Mise en place d’une architecture frontend réactive et évolutive basée sur une architecture orientée composants proposée par ReactJS (produit Facebook) et une approche unidirectionnelle et événementielle de traitement des données avec Redux et redux-saga', },
        { text: 'Mise en place d’une intégration continue (CI) basée sur Jenkins et Docker', },
        { text: 'Mise en place d’un déploiement continu (CD) basée sur Docker', },
        { text: 'Outils de construction et de tests', },
        { text: 'Création d’une image Docker', },
        { text: 'Création de scripts bash d’aide à la construction de l’application à ses différents stades de maturité', },
      ],
    },
    {
      text: 'Technologies utilisées :',
      children: [
        { text: 'ReactJS / Redux / redux-saga', },
        { text: 'Webpack / Babel / ESLint', },
        { text: 'Jest', },
        { text: 'CircleCI / Github', },
        { text: 'Docker', },
      ],
    },
    {
      text: 'Contributions opensources :',
      children: [
        { text: 'k-redux-factory - aide à la création de reducers, actions et sélecteurs Redux', },
        { text: 'kriya - bibliothèques de composants React-Redux', },
        { text: 'hoc-little-router - utilitaire de configuration de redux-little-router,', },
        { text: 'roadhog - utilitaire redux-saga d\'appels d\'API', },
        { text: 'k-redux-saga-tester - utilitaire de test des sagas redux-sagas', },
      ],
    },
  ],
}
