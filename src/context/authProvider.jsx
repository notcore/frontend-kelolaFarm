import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuth = !!user;

  const fetchUser = async () => {
    try {
      const res = await api.get("/user");
      setUser(res.data);
    } catch {
      setUser(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser();
    else setLoading(false);
  }, []);

  const login = async (token) => {
    localStorage.setItem("token", token);
    await fetchUser();
  };

  const logout = async () => {
    try {
      await api.post("/logout");
    } catch {}
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
