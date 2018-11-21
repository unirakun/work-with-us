export default {
  title: 'Lead Développeur FullStack',
  client: {
    name: 'navalgroup',
    color: 'white',
  },
  for: {
    name: 'Euriware',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2012, 3),
    to: Date.UTC(2015, 6),
  },
  informations: [
    { text: 'Refcoll est une application modulaire utilisée au sein de la DCNS pour suivre la construction de ses bâtiments armées.' },
    { text: 'J’ai oeuvré sur le socle technique pendant 2 ans avant de basculer sur des besoins technico-fonctionnels.' },
    {
      text: 'Missions :',
      children: [
        { text: 'Expertise et customisation de Refcoll au sein de projets de Maintien en Condition Opérationnelle et de Gestion de Documentation' },
        { text: 'Chiffrage et planning de projet Refcoll' },
        { text: 'Mise en place des forges logicielles utile au développement des différents projets' },
        { text: 'Encadrement et formation de développeurs du fonctionnel DCNS et de l’applicatif Refcoll' },
        { text: 'Expertise et définition d’architecture au sein de DCNS pour la mise en place de Refcoll pour leurs projets de MCO' },
        { text: 'Conception et développement de plusieurs modules de customisation pour améliorer l’expérience utilisateur au sein de l’application Refcoll' },
        { text: 'Conception et développement de module de customisation pour industrialiser et optimiser les opérations métiers' },
        { text: 'Mise en place de recettes fonctionnelle' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'GWT / AngularJS' },
        { text: 'Java 6 / Spring' },
      ],
    },
  ],
}
