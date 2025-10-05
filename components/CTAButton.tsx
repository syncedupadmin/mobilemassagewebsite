import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = ''
}: CTAButtonProps) {
  const baseStyles = 'inline-block px-10 py-4 font-medium transition-all duration-300 text-center tracking-wide';

  const variants = {
    primary: 'bg-gold-300 text-black hover:bg-gold-400 shadow-sm hover:shadow-md',
    secondary: 'bg-charcoal text-cream border border-charcoal-light hover:bg-charcoal-light hover:border-gold-300',
    outline: 'border border-gold-300 text-gold-300 hover:bg-gold-300/10',
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
