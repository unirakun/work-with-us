export default {
  title: 'Développeur Full Stack',
  client: {
    name: 'M/COMM',
    color: '#171715',
  },
  for: {
    name: 'Zenika',
    color: 'black',
  },
  dates: {
    from: Date.UTC(2016, 5),
    to: Date.UTC(2017, 1),
  },
  informations: [
    { text: 'M/COMM, agence en conseil et communication, souhaite réaliser une application permettant de mettre en avant sa spécificité : son usine d’impression. Pour cela une startup a été créée : Cinquième de Couv.', },
    { text: 'Cinquième de Couv est une application où il est possible d’éditer un magazine en ligne et de le personnaliser grâce à une sélection de près de 20 thèmes, 35 palettes de couleurs et 100 possibilités de mise en page. Il suffit alors d’ajouter son contenu et de demander une impression !', },
    { text: 'Cette application s’adresse à des particuliers, des collectivités, et des entreprises. Elle se doit d’être très simple d’accès, rapide, et robuste.', },
    { text: 'L’équipe se compose de 8 personnes, et la méthode Scrum est utilisée avec des sprints de deux semaines.', },
    {
      text: 'Missions :',
      children: [
        { text: 'Mise en place d’une architecture front-end réactive et évolutive basée sur l’architecture composants proposée par ReactJS (produit Facebook) et de Redux, l’approche unidirectionnelle de traitement des données', },
        { text: 'Mise en place d’une intégration continue (CI) basée sur Jenkins et Docker', },
        { text: 'Mise en place d’un déploiement continu (CD) basée sur Docker', },
        { text: 'Outils de construction et de tests', },
        { text: 'Construction de l’application sur les briques ReactJS et Redux', },
        { text: 'Création d\'images Docker', },
        { text: 'Création du docker-compose pour lier backend, frontend et base de données', },
        { text: 'Création de scripts bash d’aide à la construction de l’application à ses différents stades de maturité', },
        { text: 'Mise en place de conventions de développement front-end', },
        { text: 'Mise en place d’un module rendu PDF côté serveur (via React et NodeJS)', },
      ],
    },
    {
      text: 'Technologies utilisées :',
      children: [
        { text: 'Github / Jenkins / Docker', },
        { text: 'ReactJS / react-router / react-form / react-cropper / draftjs', },
        { text: 'Sass', },
        { text: 'Redux / redux-devtools / redux-react-router / redux-thunk', },
        { text: 'Mocha / Sinon / Chai', },
        { text: 'Webpack / Babel / ESLint', },
        { text: 'Spring (boot, security, data)', },
        { text: 'Java 8', },
        { text: 'MongoDB', },
      ],
    },
  ],
}
