import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import { UpadateButton, DeleteButton, SwitchButton } from './ActionButtons';
import Ratings from './Ratings';
import Img from './Img'
import poster_placeholder from '../images/poster-placeholder.png';


class CardBack extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id={`modal-${this.props.data._id}`} tabIndex="1" role="dialog" aria-labelledby={`modalLabel-${this.props.data._id}`} aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`modalLabel-${this.props.data._id}`}>{this.props.data.title}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            <Img className="poster-back" src={this.props.data.poster} alt="Poster" imgAlt={poster_placeholder} />
                                        </div>
                                        <div className="col-8">
                                            <div className="row">
                                                <div className="col-6">
                                                    <p>Year: {this.props.data.year}</p>
                                                    <p>Genre: {this.props.data.genre}</p>
                                                    <p>Country: {this.props.data.country}</p>
                                                    <p>Language: {this.props.data.language}</p>
                                                </div>
                                                <div className="col-6">
                                                    <p>Cast: {this.props.data.cast}</p>
                                                    <p>Runtime: {this.props.data.runtime}</p>
                                                    <p>Director: {this.props.data.director}</p>
                                                    <div>Ratings: <Ratings data={this.props.data}/></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p>Plot: {this.props.data.plot}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p>My comments: {this.props.data.comments}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="row width-100">
                                    <div className="col-6">
                                        <SwitchButton data={this.props.data} refresher={this.props.refresher} showText={true}/>
                                    </div>
                                    <div className="col-3">
                                        <a href="#" type="button" className="btn btn-info width-100" data-dismiss="modal">
                                            Edit&nbsp;&nbsp;<FontAwesomeIcon icon={faPencilAlt} />
                                        </a>
                                    </div>
                                    <div className="col-3">
                                        <button type="button" className="btn btn-danger width-100" data-toggle="modal" data-target={`#modal-confirm-${this.props.data._id}`}>
                                            Delete&nbsp;&nbsp;<FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" tabIndex="2" role="dialog" id={`modal-confirm-${this.props.data._id}`}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Are you sure?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                    <p>You are about to delete <b>{this.props.data.title}</b>.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <DeleteButton data={this.props.data} refresher={this.props.refresher}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardBack;
