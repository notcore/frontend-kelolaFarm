import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/authProvider";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuth, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // bisa diganti skeleton/animation

  if (!isAuth) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/home" replace />; // halaman forbidden
  }

  return children;
};

export default ProtectedRoute;
