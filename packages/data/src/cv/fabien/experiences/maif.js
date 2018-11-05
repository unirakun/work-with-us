export default {
  title: 'Développeur Frontend',
  client: {
    name: 'MAIF',
    color: 'white',
  },
  for: {
    name: 'Zenika',
    color: 'black',
  },
  dates: {
    from: Date.UTC(2016, 3),
    to: Date.UTC(2016, 5),
  },
  informations: [
    { text: 'La MAIF, assurance mutuelle, souhaite rapprocher ses clients de leurs agents en charge de la qualification et du suivi des sinistres.', },
    { text: 'Le POC a comme ambition de montrer à ces agents qu’il est possible de travailler dans un environnement plus souple, réactif et moderne. Ce projet se concentre uniquement sur la partie « Déclaration de Sinistre » et présente différentes vues simples à appréhender et à utiliser.', },
    {
      text: 'Missions : ',
      children: [
        { text: 'Mise en place d’une architecture frontend réactive et évolutive basée sur l’architecture composants proposée par ReactJS (produit Facebook) et de Redux, l’approche unidirectionnelle de traitement des données', },
        { text: 'Mise en place d’une intégration continue (CI)', },
        { text: 'Mise en place d’un déploiement continu (CD)', },
        { text: 'Outils de construction et de tests', },
        { text: 'Création d’une image Docker', },
        { text: 'Utilisation de styles propres aux composants (sans collision de style) en Sass', },
      ],
    },
    {
      text: 'Technologies utilisées :',
      children: [
        { text: 'Github / CircleCI / AppEngine', },
        { text: 'ReactJS / react-router', },
        { text: 'Sass', },
        { text: 'Redux / redux-thunk', },
        { text: 'Mocha / Sinon / Chai', },
        { text: 'Webpack / Babel', },
      ],
    },
    {
      text: 'Contributions opensources :',
      children: [
        { text: 'hoc-react-loader, utilitaire de chargement d\'un composant graphique avec son indicateur de chargement', },
        { text: 'hoc-react-animate, utilitaire d\'animation de composants ReactJS,' },
      ],
    },
  ],
}
