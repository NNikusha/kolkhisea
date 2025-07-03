import { GallerySectionProps } from "@/app/types/type";
import GalleryMainImage from "../GalleryMainImage/GalleryMainImage";

const Gallery3ImageSection = ({
  items,
  sectionIndex,
  locale,
}: GallerySectionProps) => {
  return (
    <div className="flex flex-col gap-6">
      {(items[0] || items[1]) && (
        <div className="flex gap-6 md:flex-row flex-col">
          {items[0] && (
            <GalleryMainImage
              url={items[0].image_url}
              description={items[0].text[locale] || ""}
              index={sectionIndex * 3 + 1}
              locale={locale}
              delay={0}
            />
          )}
          {items[1] && (
            <GalleryMainImage
              url={items[1].image_url}
              description={items[1].text[locale] || ""}
              index={sectionIndex * 3 + 2}
              locale={locale}
              delay={0.2}
            />
          )}
        </div>
      )}
      {items[2] && (
        <GalleryMainImage
          url={items[2].image_url}
          description={items[2].text[locale] || ""}
          isMain
          index={sectionIndex * 3 + 3}
          locale={locale}
          delay={0.4}
        />
      )}
    </div>
  );
};

export default Gallery3ImageSection;