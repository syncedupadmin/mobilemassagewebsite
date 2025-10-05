import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceCard({ title, description, imageSrc, imageAlt }: ServiceCardProps) {
  return (
    <div className="group bg-black border border-gold-500/20 rounded-lg overflow-hidden shadow-lg shadow-gold-500/10 hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-semibold text-gold-400 mb-3">
          {title}
        </h3>
        <p className="text-gold-200 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
