export function formatPostDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  });
}

export function formatCategoryLabel(category?: string): string | null {
  if (!category) return null;

  const labels: Record<string, string> = {
    'droit-des-affaires': 'Droit des affaires',
    'droit-fiscal': 'Droit fiscal',
    'droit-social': 'Droit social',
    transmission: 'Transmission',
    actualites: 'Actualités',
  };

  return labels[category] ?? category;
}
