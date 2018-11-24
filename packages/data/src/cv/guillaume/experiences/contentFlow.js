export default {
  title: 'Lead Développeur FullStack',
  client: {
    name: 'ContentFlow',
    color: 'white',
  },
  for: {
    name: 'Netapsys',
    color: 'white',
  },
  dates: {
    from: Date.UTC(2016, 2),
    to: Date.UTC(2016, 5),
  },
  informations: [
    { text: 'ContentFlow est une plateforme de mise en relation de grand compte avec des régies publicitaire.' },
    { text: 'J’ai oeuvré lors de l’initialisation du produit afin de produire une stack MEAN cohérente.' },
    {
      text: 'Missions :',
      children: [
        { text: 'Mise en place de l’architecture technique sur une stack MEAN' },
        { text: 'Développement front et back de l\'application' },
        { text: 'Mise en place d’outils de qualité de code' },
      ],
    },
    {
      text: 'Technologies utilisées : ',
      children: [
        { text: 'AngularJs (1.5)' },
        { text: 'NodeJs / Express' },
        { text: 'MongoDB / ElasticSearch' },
      ],
    },
  ],
}
