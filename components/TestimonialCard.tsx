interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-charcoal border-l-2 border-gold-300/30 p-10 transition-opacity duration-300 hover:opacity-95">
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-gold-300' : 'text-charcoal-light'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-cream/90 italic mb-6 leading-relaxed text-base">
        &ldquo;{text}&rdquo;
      </p>
      <p className="text-gold-300 font-medium text-sm tracking-wide">— {name}</p>
    </div>
  );
}
