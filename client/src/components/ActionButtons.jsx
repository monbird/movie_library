import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faQuestion, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import apis from '../api';


class AddNewButton extends Component {
    render() {
        return (
            <div>
                <a href={`/${this.props.type}/create`} className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></a>
                <label>Add new {this.props.type}</label>
            </div>
        );
    }
}

class PickRandomButton extends Component {
    render() {
        return (
            <div>
                <a href="#" className="btn btn-secondary"><FontAwesomeIcon icon={faQuestion} /></a>
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
            $('.modal').modal('hide');
            this.props.refresher({});
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.deleteAction}>Delete</button>
            </div>
        );
    }
}

class SwitchButton extends Component {
    constructor(props) {
        super(props);

        if(!('onChange' in this.props)) {
            this.onChange = (checked) => {
                let movie = this.props.data;
                if (movie) {
                    movie.is_watched = checked;
                    apis.updateMovieOrSeries(this.props.data._id, movie);
                    this.props.refresher(movie);
                }
            }
        } else {
            this.onChange = this.props.onChange;
        }
    }

    render() {
        let showText = this.props.showText;

        return (
            <BootstrapSwitchButton
                checked={this.props.data && this.props.data.is_watched}
                onlabel={[showText && "Watched\u00A0\u00A0", <FontAwesomeIcon icon={faEye} key="fa1" />]}
                offlabel={[showText && "Unwatched\u00A0\u00A0", <FontAwesomeIcon icon={faEyeSlash} key="fa2" />]}
                onChange={this.onChange}
            />
        );
    }
}

export { AddNewButton, PickRandomButton, UpadateButton, DeleteButton, SwitchButton };
