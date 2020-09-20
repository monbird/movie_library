import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { signOutUser } from "../actions/authActions";

class Links extends Component {
    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    handleSignOut(event) {
        event.preventDefault();
        this.props.signOutUser();
        if(this.props.closeNav) {
            this.props.closeNav();
        }
    }

    render() {
        let isAuthenticated = this.props.auth.isAuthenticated;

        let ul1 = isAuthenticated ? (
            <ul className="navbar-nav mr-auto mt-2 mt-md-0" key="nav-ul-1">
                <li className="nav-item my-1 my-md-0">
                    <NavLink
                        to="/movies"
                        className="nav-link pt-1"
                        activeClassName="active"
                        onClick={this.props.closeNav}
                    >
                        Movies
                    </NavLink>
                </li>
                <li className="nav-item my-1 my-md-0">
                    <NavLink
                        to="/series"
                        className="nav-link pt-1"
                        activeClassName="active"
                        onClick={this.props.closeNav}
                    >
                        Series
                    </NavLink>
                </li>
                <li className="nav-item my-1 my-md-0">
                    <div
                        className="d-inline-block"
                        data-toggle="tooltip"
                        title="Coming soon!"
                    >
                        <NavLink
                            to="/books"
                            className="nav-link pt-1 disabled"
                            activeClassName="active"
                            onClick={this.props.closeNav}
                        >
                            Books
                        </NavLink>
                    </div>
                </li>
                <li className="nav-item my-1 my-md-0">
                    <div
                        className="d-inline-block"
                        data-toggle="tooltip"
                        title="Coming soon!"
                    >
                        <NavLink
                            to="/games"
                            className="nav-link pt-1 disabled"
                            activeClassName="active"
                            onClick={this.props.closeNav}
                        >
                            Games
                        </NavLink>
                    </div>
                </li>
            </ul>
        ) : (
            ""
        );

        return [
            ul1,
            <ul className="navbar-nav ml-auto" key="nav-ul-2">
                {!isAuthenticated && (
                    <li className="nav-item my-1 my-md-0 mr-md-2">
                        <NavLink
                            to="/user/signin"
                            className="nav-link btn btn-primary px-md-4"
                            activeClassName="active"
                            onClick={this.props.closeNav}
                        >
                            Sign In
                        </NavLink>
                    </li>
                )}
                {isAuthenticated && (
                    <li className="nav-item my-1 my-md-0 ml-md-2">
                        <NavLink
                            to="/user/signout"
                            className="nav-link btn btn-outline-primary px-md-4"
                            activeClassName="active"
                            onClick={this.handleSignOut}
                        >
                            Sign Out
                        </NavLink>
                    </li>
                )}
            </ul>,
        ];
    }
}

Links.propTypes = {
    signOutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
};

export default connect(mapStateToProps, { signOutUser }, mergeProps)(Links);
