export default {
  title: 'Formateur NodeJS',
  client: {
    name: 'DARVA',
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
    { text: 'La formation s’est déroulée sur 3 semaines. Tous les lundis, une journée mêlant théorie et pratique au travers de différents exercices. Tous les jeudis étaient dédiés aux collaborateurs afin d’expérimenter librement ce que l’on avait fait ensemble, dans le but de créer de toute pièces l’API d’un jeu confectionné par nos soins.' },
    {
      text: 'Plan simplifié de la formation :',
      children: [
        { text: 'Les bases de la syntaxe Javascript ES6' },
        { text: 'Moteur NodeJS et ses modules core' },
        { text: 'Explication de l\'eventloop et l\'asynchronisme' },
        { text: 'Utilisation des streams' },
        { text: 'Différents outils : (Koa2 / mongoDB / socket.io)' },
      ],
    },
  ],
}
