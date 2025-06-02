"use client";

import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { FeatureCard } from "../FeatureCard/FeatureCard";
import { fetchFlatDetailCards } from "@/app/hooks/axios";

interface FeatureData {
  title: { en: string; ka: string; ru: string };
  text: { en: string; ka: string; ru: string };
}

const FlatDetailPageFeatureCards = () => {
  const locale = useLocale() as "en" | "ka" | "ru";
  const [features, setFeatures] = useState<FeatureData[]>([]);

  useEffect(() => {
    fetchFlatDetailCards()
      .then((data) => {
        console.log("API Response (Home Page):", data);
        if (data?.content?.length >= 3) {
          setFeatures(data.content);
        } else {
          console.error("Invalid data structure:", data);
          setFeatures([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setFeatures([]);
      });
  }, []);

  return (
    <div className="flex flex-col w-full relative">
      <div className="container px-[16px] lg:px-[108px] mx-auto">
        <section className="w-full py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 pb-15">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                feature={feature}
                index={i}
                locale={locale}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FlatDetailPageFeatureCards;
