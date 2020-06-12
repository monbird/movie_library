import React, { Component } from 'react';
import $ from 'jquery';

import icon_imdb from '../images/icon-imdb.png';
import icon_rt from '../images/icon-rt.png';
import icon_fw from '../images/icon-fw.png';

class Ratings extends Component {
    componentDidMount() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <a href={`https://www.imdb.com/title/${this.props.data.imdb_id}/`} target="_blank" className="btn btn-dark btn-sm" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="IMDb">
                        <img src={icon_imdb} alt="imdb icon" className="rating-icon-img"></img>    
                        <span>{!this.props.data.rating_imdb && this.props.data.rating_imdb !== 0 ? '-' : this.props.data.rating_imdb}</span>
                    </a>
                </div>
                <div className="col-4">
                    <div className="btn btn-dark btn-sm btn-static" data-toggle="tooltip" data-placement="top" title="Rotten Tomatoes">
                        <img src={icon_rt} alt="rotten tomatoes icon" className="rating-icon-img"></img>
                        <span>{!this.props.data.rating_rt && this.props.data.rating_rt !== 0 ? '-' : this.props.data.rating_rt}</span>
                    </div>
                </div>
                <div className="col-4">
                    {this.props.data.filmweb_url && (
                        <a href={this.props.data.filmweb_url} target="_blank" className="btn btn-dark btn-sm" data-toggle="tooltip" data-placement="top" title="Filmweb">
                            <img src={icon_fw} alt="filmweb icon" className="rating-icon-img"></img>
                            <span>{!this.props.data.rating_fw && this.props.data.rating_fw !== 0 ? '-' : this.props.data.rating_fw}</span>
                        </a>
                    )}
                    {!this.props.data.filmweb_url && (
                        <div className="btn btn-dark btn-sm btn-static" data-toggle="tooltip" data-placement="top" title="Filmweb">
                            <img src={icon_fw} alt="filmweb icon" className="rating-icon-img"></img>
                            <span>{!this.props.data.rating_fw && this.props.data.rating_fw !== 0 ? '-' : this.props.data.rating_fw}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Ratings;
