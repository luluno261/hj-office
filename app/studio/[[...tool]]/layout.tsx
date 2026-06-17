import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studio | HJ Offices Consortium',
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ margin: 0, height: '100vh', maxHeight: '100dvh' }}>
      {children}
    </div>
  );
}
