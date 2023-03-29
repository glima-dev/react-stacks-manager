import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
    const { user, globalLoading } = useContext(UserContext);
    const location = useLocation();

    if (globalLoading) {
        return null;
    }

    return user ? <Outlet /> : <Navigate to="/" state={{ from: location }} />
}