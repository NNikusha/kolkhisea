import React from "react";
import { FeatureCard } from "../../atoms/FeatureCard/FeatureCard";
import { SectionTitle } from "../../atoms/SectionTitle/SectionTitle";
import { HighlightsCardProps, Insight } from "@/app/types/type";
import { useTranslations } from "next-intl";
import MotionWrapper from "../../organisms/MotionWrapper/MotionWrapper";

export const HighlightsCard: React.FC<HighlightsCardProps> = ({
  insights = [],
  lang = "en",
}) => {
  const t = useTranslations("Language");

  return (
    <div className="bg-[#F3F6FB] py-16 flex flex-col items-center justify-center rounded-[48px]">
      <MotionWrapper delay={0.1}>
        <div className="w-full">
          <SectionTitle
            mainText={t("Key")}
            highlightedText={t("Investment")}
            subtitle={t("Highlights")}
          />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12">
            {insights.slice(0, 3).map((item: Insight, index: number) => (
              <FeatureCard
                key={index}
                index={index}
                locale={lang}
                title={item.title?.[lang] ?? ""}
                number={`0${index + 1}`}
                description={item.insight?.[lang] ?? ""}
                isFromHighlitsPage={true}
              />
            ))}
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default HighlightsCard;
