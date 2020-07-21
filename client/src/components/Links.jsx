import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class Links extends Component {
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    render() {
        return [
            <ul className="navbar-nav mr-auto mt-2 mt-md-0" key='nav-ul-1'>
                <li className="nav-item my-1 my-md-0">
                    <NavLink to="/movies" className="nav-link pt-1" activeClassName="active" onClick={this.props.closeNav}>
                        Movies
                    </NavLink>
                </li>
                <li className="nav-item my-1 my-md-0">
                    <NavLink to="/series" className="nav-link pt-1" activeClassName="active" onClick={this.props.closeNav}>
                        Series
                    </NavLink>
                </li>
                <li className="nav-item my-1 my-md-0">
                    <div class="d-inline-block" data-toggle="tooltip" title="Coming soon!">
                        <NavLink to="/books" className="nav-link pt-1 disabled" activeClassName="active" onClick={this.props.closeNav}>
                            Books
                        </NavLink>
                    </div>
                </li>
                <li className="nav-item my-1 my-md-0">
                    <div class="d-inline-block" data-toggle="tooltip" title="Coming soon!">
                        <NavLink to="/games" className="nav-link pt-1 disabled" activeClassName="active" onClick={this.props.closeNav}>
                            Games
                        </NavLink>
                    </div>
                </li>
            </ul>,
            <ul className="navbar-nav ml-auto" key='nav-ul-2'>
                <li className="nav-item my-1 my-md-0 mr-md-2">
                    <NavLink to="/user/signin" className="nav-link btn btn-primary px-md-4" activeClassName="active" onClick={this.props.closeNav}>
                        Sign In
                    </NavLink>
                </li>
                <li className="nav-item my-1 my-md-0 ml-md-2">
                    <NavLink to="/user/signout" className="nav-link btn btn-outline-primary px-md-4"  activeClassName="active" onClick={this.props.closeNav}>
                        Sign out
                    </NavLink>
                </li>
            </ul>
        ]
    }
}

export default Links;
