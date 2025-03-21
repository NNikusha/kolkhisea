import Image from 'next/image';

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => {
  return (
    <Image src={src} width={40} height={40} alt={alt} className="cursor-pointer" />
  );
};

export default SocialIcon;