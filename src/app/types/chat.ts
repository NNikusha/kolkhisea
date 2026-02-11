export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  isOpen: boolean;
  conversationId: string;
  leadCaptured: boolean;
  leadInfo?: LeadInfo;
}

export interface LeadInfo {
  name?: string;
  phone?: string;
  email?: string;
  interest?: string;
  timestamp: Date;
}

export interface Apartment {
  id: string;
  name: string;
  type: string;
  size: {
    min: number;
    max: number;
    unit: string;
  };
  features: string[];
  floors: string;
  description: string;
}

export interface ApartmentPricing {
  apartmentId: string;
  priceRange: {
    min: number;
    max: number;
  };
  averagePrice: number;
}

export interface PaymentPlan {
  name: string;
  discount?: number;
  description: string;
  downPayment?: number;
  installmentMonths?: number;
  interestRate?: number;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
    address: string;
    website: string;
  };
  location: {
    city: string;
    region: string;
    country: string;
    nearbyAttractions: string[];
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    timezone: string;
  };
  projectStatus: {
    phase: string;
    completionDate: string;
    currentProgress: string;
  };
  services: Service[];
  sellingPoints: string[];
  faqs: FAQ[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: string;
  includes?: string[];
  refundable?: boolean;
  included?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ChatApiRequest {
  message: string;
  conversationHistory: Message[];
  conversationId: string;
}

export interface ChatApiResponse {
  message: string;
  conversationId: string;
  shouldCaptureLead?: boolean;
}

