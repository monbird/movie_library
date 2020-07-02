import React, { Component } from 'react';
import Moment from 'react-moment';
import { Icon } from 'semantic-ui-react';

import { SwitchButton } from './ActionButtons';
import Ratings from './Ratings';
import PosterImg from './PosterImg';

class CardFront extends Component {
    render() {
        return (
            <div className={`card card-front ${ this.props.highlightedMovieId === this.props.data._id && 'text-white bg-dark'}`}
            id={`${this.props.highlightedMovieId === this.props.data._id && 'focused-card' }`}>
                <PosterImg className="card-img-top poster" src={this.props.data.poster} alt="Poster"/>
                <div className="card-body">
                    <Ratings data={this.props.data}/>
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">
                        <small className="text-muted added-on-info">Added on:&nbsp;
                            <Moment format="Do MMMM YYYY">{this.props.data.createdAt}</Moment>
                        </small>
                    </p>
                    <div className="row">
                        <div className="col-5">
                            <button type="button" className="btn block w-100 info-btn" data-toggle="modal" data-target={`#modal-${this.props.data._id}`}>
                                <Icon name='info' />
                            </button>
                        </div>
                        <div className="col-7">
                            <SwitchButton data={this.props.data} refresher={this.props.refresher} showText={false}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardFront;
