import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import Apartments from "./pages/Home/Apartments/Apartments";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import MyOrder from "./pages/MyOrder/MyOrder";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import ManageOrder from "./pages/ManageOrder/ManageOrder";
import Navigation from "./pages/Shared/Navigation/Navigation";
import Footer from "./pages/Shared/Footer/Footer";
import NotFound from "./pages/Shared/NotFound/NotFound";
import ExploreApartments from "./pages/ExploreApartments/ExploreApartments";
import MyBookings from "./pages/MyBookings/MyBookings";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/explore'>
              <ExploreApartments></ExploreApartments>
            </Route>
            <PrivateRoute exact path='/myorders'>
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path='/apartments'>
              <Apartments></Apartments>
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute exact path='/manageOrder'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
