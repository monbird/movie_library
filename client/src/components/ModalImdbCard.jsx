import React, { Component } from 'react';

class ModalImdbCard extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="#" alt="Poster"/>
                <div className="card-body">
                    <h5 className="card-title">Titanic</h5>
                    <p className="card-text">1997</p>
                    <a href="#" className="btn btn-primary">Choose this</a>
                </div>
            </div>
        );
    }
}

export default ModalImdbCard;
