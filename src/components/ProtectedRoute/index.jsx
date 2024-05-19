import { connect } from "react-redux";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const ProtectedRoute = ({ loggedInUser }) => {
    const [ openModal, setOpenModal ] = useOutletContext();
    return loggedInUser ? <Outlet context={[ openModal, setOpenModal]}/> : <Navigate to='/' />;
}

const mapPropsToState = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
};

export default connect(mapPropsToState)(ProtectedRoute);