import React, { Component } from 'react';

import logo from '../images/favicon.jpg';

class Logo extends Component {
    render() {
        return (
            <a className="navbar-brand" href="/">
                <img src={logo} width="50" height="50" alt="logo" />
                <p>My Watchlist</p>
            </a>
        );
    }
}

export default Logo;
