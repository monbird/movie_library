import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apis from '../api';

import Card from './Card';
import CardListControllers from './CardListControllers';

class CardList extends Component {

    REFRESHER_ALLOWED_ACTIONS = ['delete', 'update']

    constructor(props) {
        super(props);
        this.state = {
            pieces: [],
            highlightedMovieId: null
        };
        if(this.props.type) {
            this.state.type_plural = this.props.type === 'movie' ? 'movies' : this.props.type;
        }

        this.highlightMovie = this.highlightMovie.bind(this);
        this.refresher = this.refresher.bind(this);
    }

    componentDidMount = async () => {
        let method = null;
        if (this.props.type === "movie") {
            method = 'getAllMovies';
        } else if (this.props.type === "series") {
            method = 'getAllSeries';
        }
        if (method) {
            await apis[method]().then(pieces => {
                this.setState({
                    pieces: pieces.data.data
                });
            })
        }
    }

    refresher(action, data) {
        if(this.REFRESHER_ALLOWED_ACTIONS.indexOf(action) < 0) {
            console.error('Unrecognized action!');
            return;
        }

        let newPieces = [];
        for (let i = 0; i < this.state.pieces.length; i++) {
            if(this.state.pieces[i]._id === data._id) {
                if(action === 'update') {
                    newPieces.push(data);
                } else if(action === 'delete') {
                    continue;
                }
            } else {
                newPieces.push(this.state.pieces[i]);
            }
        }

        this.setState({
            pieces: newPieces
        });
    }

    // filterCards = () => {

    // }

    highlightMovie = (movieId) => {
        this.setState({
            highlightedMovieId: movieId
        });
    }

    componentDidUpdate() {
        function scrollTo(element, yOffset = -130){
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }

        const element = document.getElementById('focused-card');
        if(element) {
            scrollTo(element);
        }
    }

    render() {
        const showCards = this.state.pieces.length > 0;

        return (
            <div>
                <CardListControllers data={this.state.pieces} type={this.props.type} highlightMovie={this.highlightMovie} refresher={this.refresher} filterCards={this.filterCards}/>
                <div className="container cardList-container px-4 px-sm-3">
                    <div className="row">
                        {showCards && this.state.pieces.map(movie => (
                            <Card data={movie} key={`key-${movie._id}`} highlightedMovieId={this.state.highlightedMovieId} refresher={this.refresher}/>
                        ))}
                        {!showCards && (
                            <p className="col-12">You don't have any {this.state.type_plural} saved yet. <Link to={`/${this.props.type}/create`} className="no-entries-yet">Add a new title.</Link></p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardList;
