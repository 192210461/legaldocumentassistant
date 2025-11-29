import React, { useEffect, useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
interface User {
  email: string;
  name: string;
  role: string;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem('deeplex_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);
  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const userData = {
      email,
      name: email.split('@')[0],
      role: 'User'
    };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('deeplex_user', JSON.stringify(userData));
  };
  const register = async (name: string, email: string, password: string, role: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const userData = {
      email,
      name,
      role
    };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('deeplex_user', JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('deeplex_user');
  };
  return <AuthContext.Provider value={{
    user,
    login,
    register,
    logout,
    isAuthenticated
  }}>
      {children}
    </AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}