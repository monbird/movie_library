import React, { Component } from 'react';

import icon_imdb from '../images/icon-imdb.png';
import icon_rt from '../images/icon-rt.png';
import icon_filmweb from '../images/icon-filmweb.png';

class CardFront extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.data.poster} alt="Poster"></img>
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <a href={`https://www.imdb.com/title/${this.props.data.imdb_id}/`} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                                <img src={icon_imdb}></img>    
                                <span>{this.props.data.rating_imdb}</span>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="#" className="btn btn-dark">
                                <img src={icon_rt}></img>
                                <span>{this.props.data.rating_rt}</span>
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="#" className="btn btn-dark">
                                <img src={icon_filmweb}></img>
                                <span>{this.props.data.rating_filmweb}</span>
                            </a>
                        </div>
                    </div>
                    <h5 className="card-title">{this.props.data.title}</h5>
                </div>
            </div>
        );
    }
}

export default CardFront;
