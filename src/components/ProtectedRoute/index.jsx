import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ loggedInUser }) => {
    return loggedInUser ? <Outlet /> : <Navigate to='/' />;
}

const mapPropsToState = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
};

export default connect(mapPropsToState)(ProtectedRoute);