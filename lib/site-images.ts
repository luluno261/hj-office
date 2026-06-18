export const siteImages = {
  logo: '/logo.jpg',
  heroOffice: '/hjoffice-hero.jpeg',
  buildingExteriorDusk: '/hj-office-hero1.jpeg',
  conferenceRoom: '/Image2.jpg',
  entranceSign: '/Image3.jpg',
  officeInterior: '/Image4.jpg',
  buildingSide: '/Image5.jpg',
  buildingExteriorDay: '/Image6.jpg',
  heroModernFrame: '/Image1.jpg',
} as const;

export const siteImageAlt: Record<keyof typeof siteImages, string> = {
  logo: 'Logo HJ Offices Consortium',
  heroOffice: 'Consultation professionnelle chez HJ Offices',
  buildingExteriorDusk: 'Réunion professionnelle en salle de conférence HJ Offices',
  conferenceRoom: 'Salle de conférence HJ Offices',
  entranceSign: "Panneau d'accueil HJ Offices",
  officeInterior: 'Bureau moderne équipé chez HJ Offices',
  buildingSide: 'Allée latérale du bâtiment HJ Offices',
  buildingExteriorDay: 'Façade du bâtiment HJ Offices en journée',
  heroModernFrame: 'Façade moderne du bâtiment HJ Offices au crépuscule',
};
