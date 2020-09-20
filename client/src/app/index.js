import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import { setCurrentUser, signOutUser } from "../actions/authActions";
import store from "../store";
import { NavBar, Footer, PrivateRoute } from '../components';
import { MoviesList, SeriesList, MovieCreate, SeriesCreate, MovieUpdate, SeriesUpdate, UserRegister, UserSignIn } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'semantic-ui-css/semantic.min.css';
import '../style/theme.scss';
import '../style/custom.scss';

// Check for token to keep user signed in
if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;

    // Decode token and get user info and exp
    const decoded = jwt_decode(token);

    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds

    if (decoded.exp < currentTime) {
      // Sign out user
      store.dispatch(signOutUser());
      // Redirect to sign in
      window.location.href = "./user/signin";
    } else {
        // Set user and isAuthenticated
        store.dispatch(setCurrentUser(decoded));
    }
}

function App() {
    return (
        <Provider store={store}>
            <Router basename="digital-library">
                <div id="content-wrap">
                    <NavBar/>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={6000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <Switch>
                        <PrivateRoute path="/" exact component={MoviesList} />
                        <PrivateRoute path="/movies" exact component={MoviesList} />
                        <PrivateRoute path="/series" exact component={SeriesList} />
                        <PrivateRoute path="/movie/create" exact component={MovieCreate} />
                        <PrivateRoute path="/series/create" exact component={SeriesCreate} />
                        <PrivateRoute path="/movie/edit/:id" exact component={MovieUpdate} />
                        <PrivateRoute path="/series/edit/:id" exact component={SeriesUpdate} />
                        <Route path="/user/register" exact component={UserRegister} />
                        <Route path="/user/signin" exact component={UserSignIn} />
                        <PrivateRoute path="/user/signout" exact component={UserSignIn} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
