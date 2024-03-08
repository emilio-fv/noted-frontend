import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ loggedInUser }) => {
    return loggedInUser ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoute;