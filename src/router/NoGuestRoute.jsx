import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth(false);
      setLoading(false);
      return;
    }

    api.get("/user")
      .then(() => setAuth(true))
      .catch(() => {
        localStorage.removeItem("token");
        setAuth(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
}
