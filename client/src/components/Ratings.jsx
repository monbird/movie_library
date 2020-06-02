import React, { Component } from 'react';

import icon_imdb from '../images/icon-imdb.png';
import icon_rt from '../images/icon-rt.png';
import icon_filmweb from '../images/icon-filmweb.png';

class Ratings extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <a href={`https://www.imdb.com/title/${this.props.data.imdb_id}/`} className="btn btn-dark btn-sm" target="_blank" rel="noopener noreferrer">
                        <img src={icon_imdb} alt="imdb icon" className="rating-icon-img"></img>    
                        <span>{this.props.data.rating_imdb}</span>
                    </a>
                </div>
                <div className="col-4">
                    <a href="#" className="btn btn-dark btn-sm">
                        <img src={icon_rt} alt="rotten tomatoes icon" className="rating-icon-img"></img>
                        <span>{this.props.data.rating_rt}</span>
                    </a>
                </div>
                <div className="col-4">
                    <a href="#" className="btn btn-dark btn-sm">
                        <img src={icon_filmweb} alt="filmweb icon" className="rating-icon-img"></img>
                        <span>{this.props.data.rating_filmweb}</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Ratings;
