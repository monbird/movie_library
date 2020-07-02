import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import $ from "jquery";
import { toast } from 'react-toastify';
import { Button, Icon } from 'semantic-ui-react';

import apis from '../api';

class AddNewButton extends Component {
    render() {
        return (
            <Button as={Link} to={`/${this.props.type}/create`} animated='vertical' className='semantic-btn add-new-btn w-100 mr-0'>
                <Button.Content visible>
                    <Icon name='add'/>
                </Button.Content>
                <Button.Content hidden>ADD NEW</Button.Content>
            </Button>
        );
    }
}

class PickRandomButton extends Component {
    pickRandomAction = () => {
        let titles = this.props.data;
        let randomNo = [Math.floor(Math.random() * titles.length)];
        let randomTitle = titles[randomNo];
        this.props.highlightMovie(randomTitle._id);
    }

    render() {
        return (
            <Button onClick={this.pickRandomAction} animated='vertical' className='semantic-btn pick-random-btn w-100 mr-0'>
                <Button.Content visible>
                    <Icon name='question' />
                </Button.Content>
                <Button.Content hidden>PICK RANDOM</Button.Content>
            </Button>
        );
    }
}

class UpdateButton extends Component {
    closeAllModals = () => {
        $('.modal').modal('hide');
    }

    render() {
        return (
            <Link to={`/${this.props.data.type}/edit/${this.props.data._id}`} className="btn btn-success w-100" onClick={this.closeAllModals}>
                <Icon name='pencil' />&nbsp;Edit
            </Link>
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
                onlabel={[showText && "Watched\u00A0\u00A0", <Icon name='eye' key="fa1" />]}
                offlabel={[showText && "Unwatched\u00A0\u00A0", <Icon name='eye slash' key="fa2" />]}
                onChange={this.onChange}
                height={this.props.height}
            />
        );
    }
}

export { AddNewButton, PickRandomButton, UpdateButton, DeleteButton, SwitchButton };
