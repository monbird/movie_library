import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faQuestion, faEye, faEyeSlash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

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
            <a href={`/${this.props.data.type}/edit/${this.props.data._id}`}  type="button" className="btn btn-info width-100">
                Edit&nbsp;&nbsp;<FontAwesomeIcon icon={faPencilAlt} />
            </a>
        );
    }
}

class DeleteButton extends Component {
    deleteAction = () => {
        apis.deleteMovieOrSeries(this.props.data._id)
        .then((response) => {
            $('.modal').modal('hide');
            this.props.refresher({});

            let typeTitle = this.props.data.type.charAt(0).toUpperCase() + this.props.data.type.slice(1);
            let msg = '👍 ' + typeTitle + ' "' + response.data.data.title + '" deleted!';
            toast.success(msg);
        })
        .catch((error) => {
            let msg = null;
            if(error.response && error.response.data) {
                msg = '👎 Could not delete ' + this.props.data.type + ': ' + error.response.data.message;
            } else {
                let typeTitle = this.props.data.type.charAt(0).toUpperCase() + this.props.data.type.slice(1);
                msg = '👎 ' + typeTitle + ' not deleted!';
            }
            toast.error(msg);
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
