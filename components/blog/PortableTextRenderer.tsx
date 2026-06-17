import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';

type PortableTextValue = Parameters<typeof PortableText>[0]['value'];

export type { PortableTextValue };

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '#';
      const isExternal = href.startsWith('http');

      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }

      return <Link href={href}>{children}</Link>;
    },
  },
};

interface PortableTextRendererProps {
  value: PortableTextValue;
}

export function PortableTextRenderer({ value }: PortableTextRendererProps) {
  return (
    <div className="prose-blog">
      <PortableText value={value} components={components} />
    </div>
  );
}
