import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { selectAuthIsLogin, selectAuthToken } from "../../redux/auth/auth-selectors";

const PrublicRoute = () => {
    const loginCheck = useSelector(selectAuthIsLogin);
    const tokenCheck = useSelector(selectAuthToken);

    if (!loginCheck && tokenCheck) {
        return <p>Loading...</p>
    }
    if (loginCheck && tokenCheck) {
        return <Navigate to="/cards" />
    }
    
    return <Outlet />
}

export default PrublicRoute;
