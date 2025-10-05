import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceCard({ title, description, imageSrc, imageAlt }: ServiceCardProps) {
  return (
    <div className="group bg-black-light border-b border-charcoal-light overflow-hidden transition-opacity duration-300 hover:opacity-95">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-opacity duration-500 group-hover:opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-serif font-medium text-gold-300 mb-3 tracking-wide">
          {title}
        </h3>
        <p className="text-cream/80 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
