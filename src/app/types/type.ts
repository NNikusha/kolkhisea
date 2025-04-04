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