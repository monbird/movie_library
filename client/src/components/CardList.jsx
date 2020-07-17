import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import apis from '../api';
import Card from './Card';
import CardListControllers from './CardListControllers';

class CardList extends Component {

    REFRESHER_ALLOWED_ACTIONS = ['delete', 'update', 'filter', 'search']

    SEARCH_KEYS = ['title', 'year', 'genre', 'country', 'language', 'director', 'cast', 'platform', 'plot', 'comments']

    constructor(props) {
        super(props);
        this.state = {
            pieces_all: [],
            pieces_visible: [],
            highlightedMovieId: null,
            doResetFilters: false,
            activeFilters: {},
            searchPhrase: '',
        };

        if(this.props.type) {
            this.state.type_plural = this.props.type === 'movie' ? 'movies' : this.props.type;
        }

        this.highlightMovie = this.highlightMovie.bind(this);
        this.refresher = this.refresher.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
        this.searchThrough = this.searchThrough.bind(this);
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
                    pieces_all: pieces.data.data,
                    pieces_visible: pieces.data.data
                });
            })
        }
    }

    refresher(action, data, resetFiltersDone) {
        if(this.REFRESHER_ALLOWED_ACTIONS.indexOf(action) < 0) {
            console.error('Unrecognized action!');
            return;
        }

        let stateUpdate = {};

        if(action === 'update' || action === 'delete') {
            let newPieces = [];
            for (let i = 0; i < this.state.pieces_all.length; i++) {
                let newPiece = null;
                if(this.state.pieces_all[i]._id === data._id) {
                    if(action === 'update') {
                        newPiece = data;
                    } else if(action === 'delete') {
                        continue;
                    }
                } else {
                    newPiece = this.state.pieces_all[i];
                }
                newPieces.push(newPiece);
            }
            stateUpdate.pieces_all = newPieces;
        }

        if(action === 'filter') {
            this.highlightMovie(null);

            stateUpdate.activeFilters = data;

            if(resetFiltersDone) {
                stateUpdate.doResetFilters = false;
            }
        } else if(action === 'search') {
            stateUpdate.searchPhrase = data.phrase;
        }

        let activeFilters = stateUpdate.activeFilters || this.state.activeFilters;
        let searchPhrase = this.state.searchPhrase;
        if(stateUpdate.searchPhrase || stateUpdate.searchPhrase === '') {
            searchPhrase = stateUpdate.searchPhrase;
        }
        let newPiecesVisible = [];


        for (let i = 0; i < this.state.pieces_all.length; i++) {
            let include = true;
            let thisPiece = this.state.pieces_all[i];

            if(searchPhrase) {
                include = this.searchThrough(thisPiece, searchPhrase);
            }

            Object.keys(activeFilters).map(filter => {
                if(include) {
                    let filterVal = activeFilters[filter];
                    if(filter === 'hide_watched') {
                        include = !thisPiece.is_watched || !filterVal;
                    } else if(filterVal.length > 0) {
                        include = filterVal.every(function(filterEntry) {
                            return thisPiece[filter].toLowerCase().indexOf(filterEntry.toLowerCase()) >= 0;
                        });
                    }
                }
            });
            if(include) {
                newPiecesVisible.push(thisPiece);
            }
        }
        stateUpdate.pieces_visible = newPiecesVisible;

        if(Object.keys(stateUpdate).length > 0) {
            this.setState(stateUpdate);
        }
    }

    searchThrough(piece, phrase) {
        let words = phrase.toLowerCase().split(' ').filter(function(word) {
            return word.length > 2;
        });
        let self = this;

        return words.every(function(word) {
            return self.SEARCH_KEYS.some(function(searchKey) {
                return piece[searchKey].toString().toLowerCase().indexOf(word) >= 0;
            });
        });
    }

    highlightMovie = (movieId) => {
        this.setState({
            highlightedMovieId: movieId
        });
    }

    componentDidUpdate() {
        function scrollTo(element, yOffset = -130) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }

        const element = document.getElementById('focused-card');
        if(element) {
            scrollTo(element);
        }
    }

    resetFilters() {
        this.setState({
            doResetFilters: true,
            searchPhrase: ''
        })
    }

    render() {
        const showCards = this.state.pieces_visible.length > 0;
        const anyCard = this.state.pieces_all.length > 0;

        return (
            <div>
                <CardListControllers pieces_all={this.state.pieces_all} pieces_visible={this.state.pieces_visible} type={this.props.type} highlightMovie={this.highlightMovie} refresher={this.refresher} doResetFilters={this.state.doResetFilters} highlightedMovieId={this.state.highlightedMovieId} resetFilters={this.resetFilters}/>
                <div className="container cardList-container px-4 px-sm-3">
                    <div className="row">
                        {showCards && this.state.pieces_visible.map(piece => {
                            return (
                            <Card data={piece} key={`key-${piece._id}`} highlightedMovieId={this.state.highlightedMovieId} refresher={this.refresher}/>
                            );
                        })}
                        {anyCard && !showCards && (
                            <p className="col-12">None of your {this.state.type_plural} meet the selected criteria <Icon name='angle double right' /><a href="#" onClick={this.resetFilters} className="no-cards">Reset your filters </a><Icon name='angle double left' /></p>
                        )}
                        {!anyCard && (
                            <p className="col-12">You don't have any {this.state.type_plural} saved yet <Icon name='angle double right' /><Link to={`/${this.props.type}/create`} className="no-cards">Add a new title </Link><Icon name='angle double left' /></p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardList;
