export default {
  title: 'Formateur NodeJS',
  client: {
    name: 'Darva',
    color: '#748694',
  },
  for: {
    name: 'alakarteio',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2018, 10),
    to: Date.UTC(2018, 10),
  },
  informations: [
    { text: 'DARVA est une entreprise experte en solutions web et EDI (Echanges de Données Informatisés) basée à Niort et destiné à tous les acteurs professionnels de l\'assurance.' },
    { text: 'Je suis intervenu dans le service BI pour les former au développement Javascript côté serveur avec NodeJS.' },
    { text: '' },
    { text: 'La formation s’est déroulé sur 3 semaines.' },
    { text: 'Tous les lundi, une journée mêlant théorie et pratique au travers de différents exercices.' },
    { text: 'Tous les jeudi était dédiés aux collaborateurs afin d’expérimenter librement ce que l’on avait fait ensemble, dans le but de créer de toute pièces l’API d’un jeu confectionné par nos soins.' },
    {
      text: 'Plan simplifié de la formation :',
      children: [
        { text: 'Les bases de la syntaxe Javascript ES6' },
        { text: 'Moteur NodeJS et ses modules core' },
        { text: 'Explication de l’asynchronisme' },
        { text: 'Utilisation des streams' },
        { text: 'Différents outils : (Koa2 / mongoDB / socket.io)' },
      ],
    },
  ],
}
