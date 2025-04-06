export interface ApartmentType {
  id: number;
  type: string;
  size: number;
  isRenovated: boolean;
  availableFlats: number;
}
export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface Phase {
  dateRange: string;
  phase: string;
  status: string;
  tasks: Task[];
  progress: string;
  image: string;
}

export interface DropdownProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export interface FilterItemProps {
  label: string;
  options: string[];
  activeOption?: string;
  onSelect: (option: string) => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export interface Apartment {
  type: string;
  size: number;
  isRenovated: boolean;
  availableFlats: number;
}

export interface ApartmentCardSectionProps {
  apartments: Apartment[];
}

export interface ApartmentTypeSectionProps {
  ResetFilters: () => void;
  handleOpenModal: () => void;
  room: string;
  setRoom: (value: string) => void;
  area: string;
  setArea: (value: string) => void;
  delivery: string;
  setDelivery: (value: string) => void;
}

export interface MobileFilterBtnProps {
  onClick: () => void;
}
