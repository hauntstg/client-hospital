import { createContext, useState, useEffect } from "react";
import api from "../../services/api";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const { data } = await api.get("/admin/profile"); // withCredentials đã set ở instance
      setUser(data);
      setIsLogged(true);
    } catch (err) {
      setUser(null);
      setIsLogged(false);
    }
  };

  const signOut = () => {
    setIsLogged(false);
    setUser(null);
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogged, user, setIsLogged, setUser, signOut, fetchProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
