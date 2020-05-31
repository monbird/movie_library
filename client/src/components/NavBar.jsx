import React, { Component } from 'react';

import Logo from './Logo'
import Links from './Links'

class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Logo />
                    <Links />
                </nav>
            </div>
        );
    }
}

export default NavBar;
