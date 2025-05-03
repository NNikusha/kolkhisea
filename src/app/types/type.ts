export type Locale = "en" | "ka" | "ru";

export interface LocalizedContent {
  en?: string;
  ka?: string;
  ru?: string;
}

export interface ApartmentType {
  type?: {
    [key: string]: string;
  };
  total_area: number;
  status?: {
    [key: string]: string;
  };
  available_flats: string;
  image: string;
}

export interface Task {
  id: string;
  name: string;
  description?: string;
  title?: string;
}

export interface Phase {
  dateRange: string;
  phase: string;
  status: string;
  tasks: Task[];
  image: string;
  progress: string;
}

export interface DropdownProps {
  title?: string;
  value?: string;
  onChange?: (option: string) => void;
  options?: string[];
}

export interface FilterItemProps {
  label?: string;
  options?: string[];
  activeOption?: string;
  onSelect?: (option: string) => void;
}

export interface ButtonProps {
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export interface Apartment {
  type?: {
    [key: string]: string;
  };
  total_area: string | undefined;
  status?: {
    [key: string]: string;
  };
  available_flats: string;
  image: string;
}

// Define the props for ApartmentCardSection
export interface ApartmentCardSectionProps {
  apartments: Apartment[] | ApartmentType[]; // Allow both types
  lang: string;
}
export interface ApartmentTypeSectionProps {
  ResetFilters?: () => void;
  handleOpenModal?: () => void;
  room?: string;
  setRoom?: (value: string) => void;
  area?: string;
  setArea?: (value: string) => void;
  delivery?: string;
  setDelivery?: (value: string) => void;
}

export interface MobileFilterBtnProps {
  onClick?: () => void;
}

export interface NavItem {
  id?: number;
  link?: string;
  text?: string;
}

export interface BurgerMenuProps {
  isOpen?: boolean;
  handleCloseBurgerMenu?: () => void;
  navItems?: NavItem[];
}

// Main page section props
export interface ApartmentSectionProps {
  secondaryTitle?: LocalizedContent;
  cloudText?: LocalizedContent;
  cloudTextSecondary?: LocalizedContent;
  lang?: Locale;
}

export interface ModalInfoProps {
  cloudText?: LocalizedContent;
  cloudTextSecondary?: LocalizedContent;
  lang?: Locale;
}

export interface Insight {
  title?: LocalizedContent;
  insight?: LocalizedContent;
}

export interface HighlightsCardProps {
  insights?: Insight[]; // Now, it expects an array of `Insight` objects
  lang?: Locale;
}

export interface WhyUsSectionProps {
  title?: LocalizedContent;
  image?: string;
  imageText?: LocalizedContent[];
  lang?: Locale;
}

export interface LuxuryCardProps {
  title?: LocalizedContent;
  image?: string;
  imageText?: LocalizedContent;
  lang?: Locale;
}

export interface DescriptionProps {
  title?: LocalizedContent;
  lang?: Locale;
}

export interface ProjectImageProps {
  image?: string;
  imageText?: LocalizedContent;
  lang?: Locale;
}

// Helper UI components
export interface MainHeadLineProps {
  firstText?: string;
  secondText?: string;
}

export interface MainParagraphProps {
  paragraph?: string;
  centered?: boolean;
}

export interface ModalHeadlineProps {
  firstText?: string;
}

export interface ModalParagraphProps {
  paragraph?: string;
}

export interface OpacityButtonProps {
  text?: string;
  image?: string | React.ReactNode; // Changed from 'any' to string or ReactNode
  href?: string;
}

export interface HeaderProps {
  mainImage?: string | React.ReactNode; // Changed from 'any' to string or ReactNode
  mobileMainImage?: string | React.ReactNode; // Changed from 'any' to string or ReactNode
}

export interface ApartmentCardProps {
  type?: string;
  total_area?: string;
  status?: string;
  availableFlats?: number | string;
  image?: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  title?: string;
  description?: string;
}
