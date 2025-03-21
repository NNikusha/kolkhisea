import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface OpacityButtonProps {
  text: string;
  className?: string;
  image?: StaticImageData | string;
}

export default function OpacityButton({
  text,
  className,
  image,
}: OpacityButtonProps) {
  return (
    <div
      className={`mt-14 flex items-center gap-3.5 shadow-inner backdrop-blur-[8.6px] cursor-pointer transition-all duration-500 ${
        className || "py-4 px-[24px] rounded-2xl w-[203px] bg-white/15 hover:bg-white/30"
      }`}
      style={{ boxShadow: "0px 4px 24.9px 0px #FFFFFF80 inset" }}
    >
      <Link href={"/"}>
        <button className="cursor-pointer">{text}</button>
      </Link>

      {image && <Image alt="Custom Icon" src={image} width={15} height={15} />}
    </div>
  );
}
