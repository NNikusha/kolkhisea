import React from "react";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import { ApartmentCardSectionProps } from "@/app/types/type";

const ApartmentCardSection: React.FC<ApartmentCardSectionProps> = ({
  apartments = [],
  lang,
}) => {
  const resolveImageUrl = (rawImagePath?: string) => {
    if (!rawImagePath) return undefined;
    const trimmed = rawImagePath.trim();
    if (
      !trimmed ||
      trimmed.toLowerCase() === "null" ||
      trimmed.toLowerCase() === "undefined"
    ) {
      return undefined;
    }
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL || "https://admin.kolkhisea.ge/api";
    const baseApiUrl = apiUrl.endsWith("/api") ? apiUrl.slice(0, -4) : apiUrl;
    const normalizedPath = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
    return `${baseApiUrl}${normalizedPath}`;
  };

  return (
    <section className="w-full bg-white rounded-t-[56px] py-[32px] lg:py-[45px] 2xl:py-[80px]">
      <div className="container px-[20px] lg:px-[100px] mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apartments.map((apartment, index) => (
            <div key={index} className="flex justify-center">
              <ApartmentCard
                type={apartment.type?.[lang] || "Unknown"}
                total_area={apartment.total_area?.toString()}
                status={apartment.status?.[lang] || "Unknown"}
                availableFlats={parseInt(apartment.available_flats, 10)}
                image={resolveImageUrl(apartment.image)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentCardSection;
