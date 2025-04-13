import React from 'react';
import Image from 'next/image';
import MyImage from "@/app/assets/Main-Apartment.svg";
import ShareSvg from '@/app/assets/ShareSvg';
import { ProjectImageProps } from '@/app/types/type';

const ProjectImage: React.FC<ProjectImageProps> = ({ 
  image, 
  imageText,
  lang = 'en'
}) => (
  <div className="relative h-[240px] md:h-[60%] mt-0 md:mt-4">
    <div className="h-full w-full overflow-hidden rounded-[32px] md:rounded-[48px] relative">
      <Image
        src={image || MyImage}
        alt="Luxury oceanfront"
        fill
        sizes="100vw"
        quality={100}
        className="rounded-[32px] md:rounded-[48px] object-cover"
        priority
      />
      <div className="absolute top-8 left-8 hidden md:flex backdrop-blur-[10px] bg-[#F4EDE666] bg-opacity-[40%] text-white px-5 py-3 rounded-full">
        {imageText && imageText[lang] ? imageText[lang] : "10 steps from the sea"}
      </div>
      <div className="absolute hidden md:flex top-4 right-4 md:top-8 md:right-8 backdrop-blur-[10px] bg-[#F4EDE666] bg-opacity-[40%] text-white p-2 md:p-3 rounded-full">
        <ShareSvg />
      </div>
    </div>
  </div>
);

export default ProjectImage;
