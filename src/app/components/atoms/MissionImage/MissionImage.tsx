import Image from 'next/image';

interface MissionImageProps {
  src: string;
  alt: string;
  heightClass?: string;
}

const MissionImage = ({ src, alt, heightClass = 'h-[248px]' }: MissionImageProps) => {
  return (
    <div className={`w-full ${heightClass} relative rounded-[32px] overflow-hidden`}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default MissionImage;
