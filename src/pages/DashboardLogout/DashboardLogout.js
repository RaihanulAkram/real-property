import React from 'react';
import useAuth from '../../hooks/useAuth';

const DashboardLogout = () => {
    const { user, logout } = useAuth();
    return (
        <div className="py-5 my-5">
            <button
                onClick={logout}
                className="btn btn-primary btn-lg">Logout</button>
        </div>
    );
};

export default DashboardLogout;