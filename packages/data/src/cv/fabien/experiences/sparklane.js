export default {
  title: 'Expert développement Frontend',
  client: {
    name: 'Sparklane',
    color: '#232323',
  },
  for: {
    name: 'alakarteio',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2018, 1),
    to: Date.UTC(2018, 2),
  },
  informations: [
    { text: 'L\'équipe de développement de Sparklane (située à Nantes), est principalement composée de développeur backend (Java/Go). Leur stack frontend était vieillissante. Sparklane a sollicité alakarteio pour les aider à migrer leur stack frontend.' },
    { text: 'Une des contrainte était de pouvoir faire cette migration par itérations, les deux versions de l\'application devaient donc co-exister. Nous avons fait le choix de conserver l\'aspect graphique, et de faire des ponts AngularJS vers React, et inversement' },
    {
      text: 'Missions :',
      children: [
        { text: 'Développement d\'une architecture technique permettant la migration d\'une application front AngularJS vers une stack React / k-ramel' },
        { text: 'Création de composants graphiques permettant la visualisation de leurs données. (data-viz)' },
        { text: 'Formation continue de l\'équipe de développement Sparklane sur cette nouvelle stack via des codelabs' },
        { text: 'Réponses techniques à de fortes attentes sur cette migration AngularJS (1) vers ReactJS' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'react-vis' },
        { text: 'ReactJS' },
        { text: 'k-ramel' },
        { text: 'SaSS' },
        { text: 'create-react-app' },
        { text: 'docker' },
        { text: 'nginx' },
      ],
    },
    {
      text: 'Contributions opensources : ',
      children: [
        { text: 'k-ramel - gestion de l\'état de votre application, basé sur Redux et inspiré de CycleJS' },
        { text: 'k-intl - internationalisation rapide de l\'application' },
        { text: 'hoc-little-router - HoC de configuration du router avec Redux' },
      ],
    },
  ],
}
