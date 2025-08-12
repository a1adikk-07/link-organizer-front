import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { selectAuthIsLogin, selectAuthToken } from "../../redux/auth/auth-selectors";

const PrivateRoute = () => {
    const loginCheck = useSelector(selectAuthIsLogin);
    const tokenCheck = useSelector(selectAuthToken);

    if (!loginCheck && tokenCheck) {
        return <p>Loading...</p>
    }
    if (!tokenCheck) {
        return <Navigate to="/signin" />
    }

    return <Outlet />
}

export default PrivateRoute;
