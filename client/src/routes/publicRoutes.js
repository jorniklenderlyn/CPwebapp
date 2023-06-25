import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    const user = localStorage.getItem("ur");

    if (user) {
        return true;
    } else {
        return false;
    }
}

const PublicRoutes = () => {
    const auth = useAuth();

    return auth ? <Navigate to="/projects" /> : <Outlet />
}

export default PublicRoutes;