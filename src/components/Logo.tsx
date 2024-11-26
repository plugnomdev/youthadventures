
interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`font-bold text-2xl ${className}`}>
      Youth Adventures
    </div>
  );
} 