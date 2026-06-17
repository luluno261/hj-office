import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HJ Offices Consortium',
  description:
    'HJ Offices Consortium réunit avocats, notaires, experts-comptables, consultants et formateurs dans un écosystème professionnel pour un accompagnement juridique, fiscal et entrepreneurial global.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
