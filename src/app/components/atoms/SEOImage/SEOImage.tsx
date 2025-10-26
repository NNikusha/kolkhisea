import Image from 'next/image';
import { ComponentProps } from 'react';

interface SEOImageProps extends Omit<ComponentProps<typeof Image>, 'alt'> {
  alt: string;
  title?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * SEO-optimized Image component with proper alt text and loading strategies
 * for KolkhiSea project images
 */
const SEOImage = ({ 
  alt, 
  title, 
  loading = 'lazy', 
  priority = false,
  ...props 
}: SEOImageProps) => {
  
  // Enhance alt text with KolkhiSea context if it's generic
  const enhancedAlt = alt.toLowerCase().includes('kolkhisea') || 
                      alt.toLowerCase().includes('black sea') ||
                      alt.toLowerCase().includes('kobuleti')
    ? alt
    : `${alt} - KolkhiSea luxury Black Sea apartments in Kobuleti`;

  return (
    <Image
      {...props}
      alt={enhancedAlt}
      title={title || enhancedAlt}
      loading={loading}
      priority={priority}
      // Add structured data for images
      itemProp="image"
    />
  );
};

export default SEOImage;

// Predefined alt text templates for common KolkhiSea images
export const KolkhiSeaImageAlts = {
  hero: "KolkhiSea luxury Black Sea apartments in Kobuleti with panoramic sea views and modern architecture inspired by ancient Kolkhi culture",
  building: "KolkhiSea residential building exterior with Black Sea coastline and Kolkhi-inspired architectural design in Kobuleti, Georgia",
  interior: "Luxury apartment interior at KolkhiSea with modern furnishing and panoramic Black Sea views through floor-to-ceiling windows",
  seaView: "Panoramic Black Sea view from KolkhiSea luxury apartments in Kobuleti showing pristine coastline and azure waters",
  lobby: "KolkhiSea luxury apartment building lobby with modern design elements and Kolkhi cultural motifs",
  amenities: "KolkhiSea premium amenities including swimming pool, fitness center, and recreational facilities with Black Sea backdrop",
  floorPlan: "KolkhiSea apartment floor plan showing spacious layout with sea-facing windows and modern design in Kobuleti development",
  gallery: "KolkhiSea photo gallery showcasing luxury Black Sea apartments, interiors, and amenities in Kobuleti, Georgia",
  contact: "KolkhiSea contact information and location in Kobuleti, Georgia for luxury Black Sea apartment inquiries",
  aboutProject: "KolkhiSea project overview showing luxury apartment development on ancient Colchis archaeological site in Kobuleti",
  heritage: "Ancient Kolkhi cultural artifacts and archaeological discoveries at KolkhiSea development site in Kobuleti, Georgia",
  construction: "KolkhiSea construction progress showing modern luxury apartment building rising on Black Sea coast in Kobuleti",
  lifestyle: "Luxury coastal lifestyle at KolkhiSea apartments with Black Sea access and modern amenities in Kobuleti, Georgia"
};
