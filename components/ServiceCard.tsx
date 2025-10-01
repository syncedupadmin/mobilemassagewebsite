import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceCard({ title, description, imageSrc, imageAlt }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-3">
          {title}
        </h3>
        <p className="text-charcoal-900/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
