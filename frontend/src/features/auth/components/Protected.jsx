import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import React from 'react';

import Loader from "../../../sharedComponents/Loader";

const Protected = ({ children }) => {
    const { loading, user } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loader/>;
    }

    if (!user) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

export default Protected;