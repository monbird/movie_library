import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavBar, Footer } from '../components';
import { MoviesList, SeriesList, MovieCreate, SeriesCreate } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/custom.css';

function App() {
    return (
        <Router>
            <NavBar />
            <ToastContainer
                position="top-right"
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
                {/* <Route path="/" exact component={Home} /> */}
                <Route path="/movies" exact component={MoviesList} />
                <Route path="/series" exact component={SeriesList} />
                <Route path="/movie/create" exact component={MovieCreate} />
                <Route path="/series/create" exact component={SeriesCreate} />
                {/* <Route path="/movie/edit/:id" exact component={MovieUpdate} /> */}
                {/* <Route path="/series/edit/:id" exact component={SeriesUpdate} /> */}
                {/* <Route path="/user/register" exact component={UserRegister} /> */}
                {/* <Route path="/user/login" exact component={UserLogin} /> */}
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
