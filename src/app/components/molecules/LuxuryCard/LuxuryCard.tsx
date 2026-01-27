import React from "react";
import Button from "../../atoms/Button/Button";
import Description from "../../atoms/Description/Description";
import ProjectImage from "../../atoms/ProjectImage/ProjectImage";
import ProjectInfo from "../../atoms/ProjectInfo/ProjectInfo";
import { LuxuryCardProps } from "@/app/types/type";
import { useTranslations } from "next-intl";
import MotionWrapper from "../../organisms/MotionWrapper/MotionWrapper";

const LuxuryCard: React.FC<LuxuryCardProps> = ({
  title,
  image,
  imageText,
  lang = "en",
}) => {
  const t = useTranslations("Language");

  return (
    <MotionWrapper delay={0.1}>
      <div className="flex flex-col h-auto lg:h-[754px] lg:h-[854px] xl:h-[734px] overflow-hidden lg:bg-transparent rounded-[32px] lg:rounded-none gap-6">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[35%]">
          <ProjectInfo />
          <Description title={title} lang={lang} />
        </div>
        <ProjectImage image={image} imageText={imageText} lang={lang} />
        <div className="lg:hidden py-6">
          <Button
            className="gap-4 text-center flex justify-end w-full items-center mb-[20px]"
            text={t("ForModernLiving")}
            href="/gallery"
          />
        </div>
      </div>
    </MotionWrapper>
  );
};

export default LuxuryCard;
