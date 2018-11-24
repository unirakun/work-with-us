export default {
  title: 'Développeur / Ops',
  client: {
    name: 'laposte',
    color: 'white',
  },
  for: {
    name: 'CGI',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2010, 4),
    to: Date.UTC(2012, 3),
  },
  informations: [
    { text: 'Pour le projet Reinette de LaPoste dans un Centre de service de 50 personnes, j’ai effectué des mission au sein de la TMA de gestion des référentiels des comptes et centres de La Poste.' },
    {
      text: 'Missions :',
      children: [
        { text: 'Conception et réalisation  de l’architecture de diverses applications' },
        { text: 'Gestion des plateformes d’intégration continue, implémentation des scripts de déploiement, de création de livrable' },
        { text: 'Gestion des composants Apache Tomcat et IBM Websphere' },
        { text: 'Chiffrage de fonctionnalité' },
        { text: 'Encadrement d’une équipe de développement' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'Struts' },
        { text: 'Java/J2E, Oracle 10/11g, Sybase,  Korn Shell' },
        { text: 'Eclipse, Tomcat 6.0, Websphere' },
        { text: 'Checkstyle, PMD, FindBugs, Junit' },
      ],
    },
  ],
}
