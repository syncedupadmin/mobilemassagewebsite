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
  const baseStyles = 'inline-block px-8 py-4 rounded-md font-medium transition-all duration-300 text-center';

  const variants = {
    primary: 'bg-gold-500 text-white hover:bg-gold-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-terracotta-500 text-white hover:bg-terracotta-600 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white',
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
