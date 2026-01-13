import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function NoAuthRoute() {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuth(false);
      setLoading(false);
      return;
    }

    api.get("/user")
      .then(() => setIsAuth(true))
      .catch(() => {
        localStorage.removeItem("token");
        setIsAuth(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
}
