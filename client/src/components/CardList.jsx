import React, { Component } from 'react';
import apis from '../api';

import Card from './Card';
import CardListControllers from './CardListControllers';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
        if(this.props.type) {
            this.state.type_plural = this.props.type === 'movie' ? 'movies' : this.props.type;
        }
    }

    componentDidMount = async () => {
        let method = null;
        if (this.props.type === "movie") {
            method = 'getAllMovies';
        } else if (this.props.type === "series") {
            method = 'getAllSeries';
        }
        if (method) {
            await apis[method]().then(movies => {
                this.setState({
                    movies: movies.data.data
                })
            })
        }
    }

    render() {
        const showCards = this.state.movies.length > 0;

        return (
            <div>
                <CardListControllers data={this.state.movies} type={this.props.type}/>
                <div className="container">
                    <div className="row">
                        {showCards && this.state.movies.map(movie => (
                            <Card data={movie} key={`key-${movie._id}`} />
                        ))}
                        {!showCards && (
                            <p className="col-12">You don't have any {this.state.type_plural} saved yet. <a href={`/${this.props.type}/create`}>Add a new title.</a></p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardList;
