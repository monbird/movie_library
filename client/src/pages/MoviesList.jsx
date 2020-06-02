import React, { Component } from 'react';
import apis from '../api';

import { AddNewButton, PickRandomButton, Filters, Card } from '../components';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount = async () => {
        await apis.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data
            })
        })
    }

    render() {
        const showCards = this.state.movies.length > 0;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <AddNewButton />
                        </div>
                        <div className="col-12 col-md-6">
                            <PickRandomButton />
                        </div>
                    </div>
                </div>
                <Filters />
                <div className="container">
                    <div className="row">
                        {showCards && this.state.movies.map(movie => (
                            <Card data={movie} key={`key-${movie._id}`}/>
                        ))}
                        {!showCards && (
                            <p className="col-12">You don't have any movies saved yet. <a href="#">Add a new title.</a></p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviesList;
