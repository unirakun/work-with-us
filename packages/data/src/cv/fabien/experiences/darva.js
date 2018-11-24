export default {
  title: 'Expert et formateur NodeJS',
  client: {
    name: 'DARVA',
    color: '#748694',
  },
  for: {
    name: 'alakarteio',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2018, 0),
    to: Date.UTC(2018, 11),
  },
  informations: [
    { text: 'DARVA est une entreprise experte en solutions web et EDI (Echanges de Données Informatisés) basée à Niort et destiné à tous les acteurs professionnels de l\'assurance' },
    { text: 'J\'interviens dans le service BI pour les aider à réaliser des scripts NodeJS de préparation de données dans leur datalake MongoDB.' },
    { text: 'Cette prestation était réalisée en partie à distance et j\'intervenais quelques jours réparties dans l\'année.' },
    {
      text: 'Missions : ',
      children: [
        { text: 'Mise en place de l\'architecture "monorepo" du projet de gestion des vues du datalake' },
        { text: 'Conseils et relectures du code produit par l\'équipe BI' },
        { text: 'Formation NodeJS de l\'équipe BI' },
        { text: 'Développement d\'outils d\'aide aux développements des scripts de préparation de données' },
        { text: 'Mise en place des outils de qualités : documentation générée (JSDoc), tests unitaires (Jest), tests d\'intégration (Jest + Docker)' },
      ],
    },
    {
      text: 'Technologies utilisées :',
      children: [
        { text: 'Github / Jenkins' },
        { text: 'NodeJS' },
        { text: 'MongoDB' },
        { text: 'Jest' },
        { text: 'Docker' },
        { text: 'Divers bibliothèques NodeJS' },
      ],
    },
  ],
}
