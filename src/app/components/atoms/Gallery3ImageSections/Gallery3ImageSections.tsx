'use client';

import { GallerySectionProps } from "@/app/types/type";
import GalleryMainImage from "../GalleryMainImage/GalleryMainImage";
import { motion } from "framer-motion";

// Item fade-in from bottom
const itemVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  },
});

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
            <motion.div
              className="flex-1 min-w-0"
              variants={itemVariants(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <GalleryMainImage
                url={items[0].image_url}
                description={items[0].text[locale] || ""}
                index={sectionIndex * 3 + 1}
                locale={locale}
              />
            </motion.div>
          )}
          {items[1] && (
            <motion.div
              className="flex-1 min-w-0"
              variants={itemVariants(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <GalleryMainImage
                url={items[1].image_url}
                description={items[1].text[locale] || ""}
                index={sectionIndex * 3 + 2}
                locale={locale}
              />
            </motion.div>
          )}
        </div>
      )}
      {items[2] && (
        <motion.div
          variants={itemVariants(0)}
          initial="hidden"
          whileInView="visible"
          
          viewport={{ once: true, amount: 0.3 }}
        >
          <GalleryMainImage
            url={items[2].image_url}
            description={items[2].text[locale] || ""}
            isMain
            index={sectionIndex * 3 + 3}
            locale={locale}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Gallery3ImageSection;
