import React, { useEffect, useState } from 'react';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
import Payments from '../Payments/Payments';
import AddReview from '../AddReview/AddReview';
import AddApartments from '../AddApartments/AddApartments';
import MyOrder from '../MyOrder/MyOrder';
import ManageOrder from '../ManageOrder/ManageOrder';
import DashboardLogout from '../DashboardLogout/DashboardLogout';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://desolate-thicket-65781.herokuapp.com/isAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 col-sm-12 px-2 p-5 text-center text-white mw-100 mh-100">
                        <div className="bg-primary dashboard">
                            <h5 className="text-white pt-5">Dashboard</h5>

                            <div className="h-100">
                                <NavLink to={`${url}`} className="link py-2">
                                    <li className="dashboard-menu text-white p-2">Payments</li>
                                </NavLink>

                                <NavLink to={`${url}/myOrders`} className="link py-2">
                                    <li className="dashboard-menu text-white p-2">My Orders</li>
                                </NavLink>


                                <NavLink to={`${url}/review`} className="link py-2">
                                    <li className="dashboard-menu text-white p-2">Review</li>
                                </NavLink>

                                {isAdmin &&
                                    <div className="">
                                        <NavLink to={`${url}/addApartments`} className="link py-2">
                                            <li className="dashboard-menu text-white p-2">Add Apartments</li>
                                        </NavLink>

                                        <NavLink to={`${url}/makeAdmin`} className="link py-2">
                                            <li className="dashboard-menu text-white p-2">Make Admin</li>
                                        </NavLink>

                                        <NavLink to={`${url}/manageOrders`} className="link py-2">
                                            <li className="dashboard-menu text-white p-2">Manage Order</li>
                                        </NavLink>
                                    </div>
                                }

                                <NavLink to={`${url}/logout`} className="link py-2">
                                    <li className="dashboard-menu text-white p-2">Logout</li>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-12 p-2 my-5 text-center">
                        <Switch>
                            <Route exact path={`${path}/review`}>
                                <AddReview></AddReview>
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}`}>
                                <Payments></Payments>
                            </Route>
                            <Route exact path={`${path}/myOrders`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route exact path={`${path}/addApartments`}>
                                <AddApartments></AddApartments>
                            </Route>
                            <Route exact path={`${path}/manageOrders`}>
                                <ManageOrder></ManageOrder>
                            </Route>
                            <Route exact path={`${path}/logout`}>
                                <DashboardLogout
                                ></DashboardLogout>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;