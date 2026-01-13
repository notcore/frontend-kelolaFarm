
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function RoleRoute({ allowedRoles }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    api.get("/user")
      .then(res => {
        if (allowedRoles.includes(res.data.role)) {
          setAllowed(true);
        }
      })
      .catch(() => setAllowed(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  return allowed ? <Outlet /> : <Navigate to="/home" replace />;
}
