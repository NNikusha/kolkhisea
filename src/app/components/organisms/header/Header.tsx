import Image from "next/image";
import React from "react";

interface HeaderProps {
  dynamicImage?: string; 
}

export default function Header({ dynamicImage }: HeaderProps) {
  const desktopImageSrc = dynamicImage || ''; 
  const mobileImageSrc = dynamicImage || ''; 

  return (
    <>
      <header className="w-full relative">
        <section className="flex justify-between items-center relative w-full">
          <div className="absolute -z-10 w-full h-[1080px] h-full top-0 left-0 border-b-[50%]">
            <Image
              className="hidden sm:flex min-h-[1080px] rounded-b-[45px] xl:rounded-b-[60px]"
              alt="Dynamic Image"
              src={desktopImageSrc}
              fill
              style={{ objectFit: "cover" }}
              priority
              loading="eager"
            />
            <Image
              className="sm:hidden min-h-[900px] rounded-b-[45px]"
              alt="Dynamic Image"
              src={mobileImageSrc}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </section>
      </header>
    </>
  );
}
