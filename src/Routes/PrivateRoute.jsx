/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import { CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import { MoonLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <MoonLoader color="#36d7b7" />
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;