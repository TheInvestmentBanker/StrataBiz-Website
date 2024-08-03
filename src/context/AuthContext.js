import { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    const res = await axios.post('/api/auth/register', userData);
    setUser(res.data);
  };

  const login = async (userData) => {
    const res = await axios.post('/api/auth/login', userData);
    setUser(res.data);
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
