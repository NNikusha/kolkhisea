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