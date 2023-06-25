import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    let user;

    const _user = localStorage.getItem("ur");

    if (_user) {
        user = JSON.parse(_user);
    }
    if (user) {
        return {
            auth: true,
            role: user.role
        }
    } else {
        return {
            auth: false,
            role: null
        }
    }
}

const ProtectedRoutes = (props) => {
    const {auth, role} = useAuth();
 
    if (props.roleRequired) {
        return auth ? (
            (props.roleRequired.includes(role)) ? (
                <Outlet />
            ) : (
                <Navigate to="/denided" />
            )
        ) : (
            <Navigate to="/login" />
        )
    } else {
        return auth ? <Outlet /> : <Navigate to="/login" />
    }
}

export default ProtectedRoutes;