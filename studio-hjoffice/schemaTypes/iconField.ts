export const iconOptions = [
  { title: 'Balance (avocat)', value: 'scale' },
  { title: 'Monument (notaire)', value: 'landmark' },
  { title: 'Graphique (comptabilité)', value: 'barChart3' },
  { title: 'Mallette (entreprise)', value: 'briefcase' },
  { title: 'Diplôme (formations)', value: 'graduationCap' },
  { title: 'Globe (consultance)', value: 'globe2' },
  { title: 'Bâtiment', value: 'building2' },
  { title: 'Utilisateurs', value: 'users' },
  { title: 'Moniteur', value: 'monitor' },
  { title: 'Voiture', value: 'car' },
  { title: 'Wi-Fi', value: 'wifi' },
  { title: 'Localisation', value: 'mapPin' },
] as const;

export type IconName = (typeof iconOptions)[number]['value'];
