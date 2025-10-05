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
  const baseStyles = 'inline-block px-8 py-4 rounded-md font-semibold transition-all duration-300 text-center';

  const variants = {
    primary: 'bg-gold-gradient text-black shadow-lg shadow-gold-500/50 hover:shadow-xl hover:shadow-gold-500/70 hover:scale-105',
    secondary: 'bg-gold-600 text-white hover:bg-gold-700 shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-500/50',
    outline: 'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black',
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
