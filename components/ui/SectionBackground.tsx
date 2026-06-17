import Image from 'next/image';

interface SectionBackgroundProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function SectionBackground({
  src,
  alt,
  className = 'absolute inset-0',
  imageClassName = 'object-cover',
  priority = false,
}: SectionBackgroundProps) {
  return (
    <div className={`${className} overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={imageClassName}
        sizes="100vw"
      />
    </div>
  );
}
