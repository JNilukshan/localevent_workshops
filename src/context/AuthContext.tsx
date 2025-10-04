import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const defaultAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

const AuthContext = createContext<AuthContextType>({
  ...defaultAuthState,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    // Check for stored auth data
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      return JSON.parse(storedAuth);
    }
    return defaultAuthState;
  });

  const login = async (email: string, password: string) => {
    setAuthState({ ...authState, isLoading: true });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock users - in a real app, this would be verified against a database
      if (email === 'organizer@example.com' && password === 'password') {
        const user: User = {
          id: 'org1',
          name: 'Jazztown Music Association',
          email: 'organizer@example.com',
          role: 'organizer',
        };
        
        const newState = {
          user,
          isAuthenticated: true,
          isLoading: false,
        };
        
        setAuthState(newState);
        localStorage.setItem('auth', JSON.stringify(newState));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setAuthState({
        ...defaultAuthState,
        isLoading: false,
      });
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setAuthState({ ...authState, isLoading: true });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock registration - in a real app, this would create a new user in the database
      const user: User = {
        id: `org${Date.now()}`,
        name,
        email,
        role: 'organizer',
      };
      
      const newState = {
        user,
        isAuthenticated: true,
        isLoading: false,
      };
      
      setAuthState(newState);
      localStorage.setItem('auth', JSON.stringify(newState));
    } catch (error) {
      setAuthState({
        ...defaultAuthState,
        isLoading: false,
      });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setAuthState(defaultAuthState);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};