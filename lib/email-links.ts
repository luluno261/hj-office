export function buildMailtoUrl(
  to: string,
  subject?: string,
  body?: string
): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return query ? `mailto:${to}?${query}` : `mailto:${to}`;
}

export function buildGmailComposeUrl(
  to: string,
  subject?: string,
  body?: string
): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
  });
  if (subject) params.set('su', subject);
  if (body) params.set('body', body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function buildContactEmailBody(fields: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  const lines = [
    'Bonjour,',
    '',
    'Je souhaite prendre contact avec HJ Offices Consortium.',
    '',
    `Nom : ${fields.name || '—'}`,
    `Email : ${fields.email || '—'}`,
    `Téléphone : ${fields.phone || '—'}`,
    '',
    fields.message || '—',
    '',
    'Cordialement,',
    fields.name || '',
  ];
  return lines.join('\n');
}

export function buildRendezVousMailtoUrl(email: string): string {
  return buildMailtoUrl(email, 'Demande de rendez-vous');
}
