import React, { Component } from 'react';
import Moment from 'react-moment';

import { SwitchButton } from './ActionButtons';
import Ratings from './Ratings';

class CardFront extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.data.poster} alt="poster"></img>
                <div className="card-body">
                    <Ratings data={this.props.data}/>
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">
                        <small className="text-muted">Adden on:&nbsp;
                            <Moment format="Do MMMM YYYY">{this.props.data.createdAt}</Moment>
                        </small>
                    </p>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modal-${this.props.data._id}`}>i</button>
                    <SwitchButton data={this.props.data} refresher={this.props.refresher}/>
                </div>
            </div>
        );
    }
}

export default CardFront;
