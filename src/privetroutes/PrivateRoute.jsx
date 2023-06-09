import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Component/providers/AuthProvider';
import Spinner from '../Component/Spinner/Spinner';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <Spinner></Spinner>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivateRoute;