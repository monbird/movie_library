import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons'

class Logo extends Component {
    render() {
        return (
            <div className="navbar-brand">
                <FontAwesomeIcon icon={faFilm} size ="3x" className="d-inline-block align-middle"/>
                <p id="logo-name" className="d-inline align-middle">My Watchlist</p>
                <FontAwesomeIcon icon={faFilm} size ="3x" className="d-inline-block align-middle"/>
            </div>
        );
    }
}

export default Logo;
