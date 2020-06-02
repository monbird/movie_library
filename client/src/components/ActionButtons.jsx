import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import $ from "jquery";

import apis from '../api';


class AddNewButton extends Component {
    render() {
        return (
            <div>
                <a href="#" className="btn btn-primary">+</a>
                <label>Add new</label>
            </div>
        );
    }
}

class PickRandomButton extends Component {
    render() {
        return (
            <div>
                <a href="#" className="btn btn-secondary">?</a>
                <label>Can't decide? Pick for me!</label>
            </div>
        );
    }
}

class UpadateButton extends Component {
    render() {
        return (
            <div>
                <a href="#" className="btn btn-info">Edit</a>
            </div>
        );
    }
}

class DeleteButton extends Component {
    deleteAction = () => {
        apis.deleteMovieOrSeries(this.props.data._id).then(() => {
            this.props.refresher({});
            $('.modal-backdrop').remove();
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.deleteAction}>Confirm</button>
            </div>
        );
    }
}

class SwitchButton extends Component {
    render() {
        return (
            <BootstrapSwitchButton
                checked={this.props.data.is_watched}
                width={200}
                onlabel='Watched'
                offlabel='Unwatched'
                onChange={(checked) => {
                    let movie = this.props.data;
                    movie.is_watched = checked;
                    apis.updateMovieOrSeries(this.props.data._id, movie);
                    this.props.refresher(movie);
                }}
            />
        );
    }
}

export { AddNewButton, PickRandomButton, UpadateButton, DeleteButton, SwitchButton };
