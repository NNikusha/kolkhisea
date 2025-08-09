import Image from 'next/image';

interface SocialIconProps {
  src: string;
  alt: string;
  href?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Image 
      src={src} 
      width={40} 
      height={40} 
      alt={alt} 
      className="cursor-pointer hover:opacity-80 transition-opacity" 
      onClick={handleClick}
    />
  );
};

export default SocialIcon;