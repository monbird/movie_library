import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Links extends Component {
    render() {
        return (
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/movies" className="nav-link" activeClassName="active">
                            Movies
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/series" className="nav-link" activeClassName="active">
                            Series
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user/register" className="nav-link" activeClassName="active">
                            Register
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user/login" className="nav-link" activeClassName="active">
                            Sign In
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Links;
