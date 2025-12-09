export interface Message {
  role: 'user' | 'model';
  content: string;
  id: string;
  timestamp: Date;
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  content: string; // Markdown-like string
  readTime: string;
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  LEARN = 'LEARN',
  CHAT = 'CHAT',
}