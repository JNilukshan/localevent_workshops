export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  time: string;
  location: string;
  category: Category;
  image: string;
  organizer: string;
  organizerId: string;
  ticketLink?: string;
  views: number;
  likes: number;
}

export type Category = 'Music' | 'Workshops' | 'Entertainment' | 'Art' | 'Sports' | 'Food' | 'Technology' | 'Other';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'organizer' | 'admin';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}