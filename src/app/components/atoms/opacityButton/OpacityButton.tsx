import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/app/assets/arrow-up-right.svg";
import React from "react";

interface OpacityButtonProp {
  text: string;
}
export default function OpacityButton({ text }: OpacityButtonProp) {
  return (
    <div
      className="mt-14 flex items-center gap-3.5 bg-white/15 shadow-inner backdrop-blur-[8.6px] w-[203px] py-4 px-[24px] rounded-2xl cursor-pointer hover:bg-white/30 transition-all duration-500"
      style={{ boxShadow: "0px 4px 24.9px 0px #FFFFFF80 inset" }}
    >
      <Link href={"/"}>
        <button className="cursor-pointer">{text}</button>
      </Link>
      <Image alt="InsideView" src={ArrowRight} width={15} height={15} />
    </div>
  );
}
