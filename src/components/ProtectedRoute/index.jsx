import { useSelector } from "react-redux";
import { Navigate, Outlet, redirect } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return isLoggedIn ? <Outlet /> : <Navigate to='/' replace />;
}

export default ProtectedRoute;