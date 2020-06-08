import React, { Component } from 'react';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import { SwitchButton } from './ActionButtons';
import Ratings from './Ratings';
import Img from './Img';
import poster_placeholder from '../images/poster-placeholder.png';


class CardFront extends Component {
    render() {
        return (
            <div className="card shadow">
                <Img className="card-img-top poster" src={this.props.data.poster} alt="Poster" imgAlt={poster_placeholder} />
                <div className="card-body">
                    <Ratings data={this.props.data}/>
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">
                        <small className="text-muted">Adden on:&nbsp;
                            <Moment format="Do MMMM YYYY">{this.props.data.createdAt}</Moment>
                        </small>
                    </p>
                    <div className="row">
                        <div className="col-5">
                            <button type="button" className="btn btn-primary block w-100" data-toggle="modal" data-target={`#modal-${this.props.data._id}`}>
                                <FontAwesomeIcon icon={faInfo} />
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
