import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  return <AuthContext.Provider value={{ user, logout, login }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}