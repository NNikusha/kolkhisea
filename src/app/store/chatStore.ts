import { create } from 'zustand';
import { Message, ChatState, LeadInfo } from '../types/chat';

interface ChatActions {
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setLoading: (loading: boolean) => void;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  setLeadInfo: (leadInfo: LeadInfo) => void;
  clearMessages: () => void;
  loadFromStorage: () => void;
  saveToStorage: () => void;
}

type ChatStore = ChatState & ChatActions;

const STORAGE_KEY = 'kolkhisea_chat_history';

// Generate unique conversation ID
const generateConversationId = () => {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Load initial state from localStorage
const loadInitialState = (): Partial<ChatState> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert timestamp strings back to Date objects
      parsed.messages = parsed.messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
      if (parsed.leadInfo?.timestamp) {
        parsed.leadInfo.timestamp = new Date(parsed.leadInfo.timestamp);
      }
      return parsed;
    }
  } catch (error) {
    console.error('Error loading chat history:', error);
  }
  return {};
};

export const useChatStore = create<ChatStore>((set, get) => ({
  // Initial state
  messages: [],
  isLoading: false,
  isOpen: false,
  conversationId: generateConversationId(),
  leadCaptured: false,
  leadInfo: undefined,
  
  // Actions
  addMessage: (message) => {
    const newMessage: Message = {
      ...message,
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
    };
    
    set((state) => ({
      messages: [...state.messages, newMessage],
    }));
    
    // Auto-save to localStorage
    setTimeout(() => get().saveToStorage(), 100);
  },
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  
  openChat: () => set({ isOpen: true }),
  
  closeChat: () => set({ isOpen: false }),
  
  setLeadInfo: (leadInfo) => {
    set({ 
      leadInfo, 
      leadCaptured: true 
    });
    setTimeout(() => get().saveToStorage(), 100);
  },
  
  clearMessages: () => {
    set({
      messages: [],
      conversationId: generateConversationId(),
      leadCaptured: false,
      leadInfo: undefined,
    });
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  },
  
  loadFromStorage: () => {
    const stored = loadInitialState();
    if (Object.keys(stored).length > 0) {
      set(stored);
    }
  },
  
  saveToStorage: () => {
    if (typeof window === 'undefined') return;
    
    const state = get();
    const toStore = {
      messages: state.messages,
      conversationId: state.conversationId,
      leadCaptured: state.leadCaptured,
      leadInfo: state.leadInfo,
    };
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
    } catch (error) {
      console.error('Error saving chat history:', error);
    }
  },
}));

// Initialize from storage on first load
if (typeof window !== 'undefined') {
  useChatStore.getState().loadFromStorage();
}

