import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface OpacityButtonProps {
  text?: string;
  className?: string;
  image?: StaticImageData | string;
  href?: string; 
}

export default function OpacityButton({
  text,
  className,
  image,
  href,
}: OpacityButtonProps) {
  const content = (
    <div
      className={`mt-14 inline-flex items-center gap-3.5 shadow-inner backdrop-blur-[8.6px] cursor-pointer transition-all duration-500 ${
        className || "py-4 px-[24px] rounded-2xl inline-flex bg-white/15 hover:bg-white/30"
      }`}
      style={{ boxShadow: "0px 4px 24.9px 0px #FFFFFF80 inset" }}
    >
      <span className="cursor-pointer">{text}</span>
      {image && <Image alt="Custom Icon" src={image} width={15} height={15} />}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
